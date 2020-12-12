import React, { useState, useEffect } from 'react';
import { Button, Form, Navbar, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IoIosAddCircle } from 'react-icons/io'
import queryString from "query-string";


import '../../../styles/ButtonStyle.css'
import '../../../styles/LabelStyle.css'
import '../../../styles/ChapterPage.css'

import { TableWithLoading } from '../components'
import { getAll } from '../../../services/storyAPI';

const statusStory = {
  'unfulfilled': 'Đang ra',
  'fullfil': 'Đã xong'
}

function StoryView(props) {
  const columns = [{
    name: 'Tên truyện',
    selector: 'name',
    sortable: true,
    width: '200px',
    wrap: true,
    hide: 'sm'
  },
  {
    name: 'Trạng thái',
    selector: 'status',
    sortable: true,
    width: '200px',
    wrap: true,
    cell: (row) => {
      return (
        <span>
          {statusStory[row.status]}
        </span>
      )
    }
  },
  {
    name: 'Tác giả',
    selector: 'author.fullName',
    sortable: true,
    width: '180px',
    center: true,
    wrap: true
  },
  {
    name: 'Người tạo',
    selector: 'createdBy.fullName',
    sortable: true,
    width: '180px',
    center: true,
    wrap: true
  },
    // {
    //   name: "",
    //   width: 170,
    //   cell: (row) => {
    //     return (
    //       <Link to={`/admin/chapters/edit/${row.id}`}>
    //         <Button variant="success" className="btn-padding-9 btn-add-tablet">
    //           Chi tiết          </Button>
    //       </Link>
    //     )
    //   }
    // },
  ]
  const [maxLengthData, setMaxLengthData] = useState(100);
  const [textSearchValue, setTextSearchValue] = useState('');
  const [modalShow, setModalShow] = useState(false);
  const [currentRow, setCurrentRow] = useState({});
  const params = queryString.parse(props.location.search);
  const paginationRowsPerPageOptions = [5, 10, 20];

  const [stories, setStories] = useState([])
  const [isLoading, setLoading] = useState(false);

  if (!params.page) {
    params.page = 1;
  }
  if (!params.limit) {
    params.limit = paginationRowsPerPageOptions[0];
  }

  useEffect(() => {
    setLoading(true)
    getAll(params)
      .then(res => {
        setStories(res.data)
        setMaxLengthData(res.total)
      })
      .finally(() => setLoading(false))
  }, [props.location.search])

  const _destroy = () => {
    setModalShow(false);
  };

  const destroy = row => {
    setCurrentRow(row);
    setModalShow(true);
  };

  const onSearchSubmit = e => {
    e.preventDefault();
    // searchService(8, 1, textSearchValue)
    //   .then(response => {
    //     console.log(response.data.message)
    //     setHotels([...response.data.message])
    //   })
    // props.history.push(`?page=1&limit=8&keywork=${textSearchValue}`);
  };
  const onSearchChange = e => {
    e.preventDefault();
    setTextSearchValue(e.target.value);
  };

  return (
    <div >
      <h1>Quản lý truyện</h1>
      <Navbar className="justify-content-between">
        <div>
          <Link to="/admin/stories/new">
            <Button variant="success" className="btn-padding-9 btn-add-tablet">
              Thêm Truyện <IoIosAddCircle />
            </Button>
          </Link>
        </div>
      </Navbar>

      <TableWithLoading
        className="style-table-customer"
        isLoading={isLoading}
        columns={columns}
        data={stories}

        noDataComponent='Không có dữ liệu'
        persistTableHead={true}
        pagination={true}
        paginationServer={true}
        paginationDefaultPage={+params.page}
        paginationTotalRows={maxLengthData}
        paginationPerPage={+params.limit}

        onChangePage={page => {
          params.page = page;
          props.history.push(
            `?page=${page}&limit=${params.limit}`
          );
        }}
        onChangeRowsPerPage={(currentRowsPerPage, currentPage) => {
          if (params.page != 1) {
            params.page = Math.floor((params.page - 1) * params.limit / currentRowsPerPage + 1)
          }
          params.limit = currentRowsPerPage;
          props.history.push(
            `?page=${params.page}&limit=${params.limit}`
          );
        }}
        paginationRowsPerPageOptions={paginationRowsPerPageOptions}

      />
    </div>
  );
}

export default StoryView
