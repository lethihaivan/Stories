import React, { useState, useEffect } from 'react';
import { Button, Form, Navbar, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IoIosAddCircle } from 'react-icons/io'
import queryString from "query-string";


import '../../../styles/ButtonStyle.css'
import '../../../styles/LabelStyle.css'
import '../../../styles/ChapterPage.css'

import { TableWithLoading } from '../components'
import { list } from '../../../services/user.service';

const formatRole = {
  'admin': 'Admin',
  'user': 'Người dùng'
}

function UserView(props) {
  const columns = [
    {
      name: 'Tên đăng nhập',
      selector: 'username',
      sortable: true,
      width: '200px',
      wrap: true
    }, {
      name: 'Họ tên',
      selector: 'fullName',
      sortable: true,
      width: '200px',
      wrap: true,
      hide: 'sm'
    },
    {
      name: 'Quyền',
      width: 170,
      cell: (row) => formatRole[row.role]
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
  const [textSearchValue, setTextSearchValue] = useState('');
  const [modalShow, setModalShow] = useState(false);
  const [currentRow, setCurrentRow] = useState({});

  const [maxLengthData, setMaxLengthData] = useState(100);
  const params = queryString.parse(props.location.search);
  const paginationRowsPerPageOptions = [5, 10, 20];

  const [users, setUsers] = useState([])
  const [isLoading, setLoading] = useState(false);

  if (!params.page) {
    params.page = 1;
  }
  if (!params.limit) {
    params.limit = paginationRowsPerPageOptions[0];
  }

  useEffect(() => {
    setLoading(true)
    list(params)
      .then(res => {
        setUsers(res.data)
        setMaxLengthData(res.total)
      })
      .catch(err => console.log(err))
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
      <h1>Danh sách người dùng</h1>
      {/* <Navbar className="justify-content-between"> */}
        {/* <div>
          <Form inline onSubmit={onSearchSubmit}>
            <FormControl
              type="text"
              placeholder="Search"
              onChange={onSearchChange}
              className="mr-sm-2"
              value={textSearchValue}
            />
            <Button variant="info" type="submit" className="btn btn-padding-7">
              <FaSearch className="FaSearch" />
            </Button>
          </Form>
        </div> */}
        {/* <div>
          <Link to="/admin/chapters/new">
            <Button variant="success" className="btn-padding-9 btn-add-tablet">
              Thêm Chuơng <IoIosAddCircle />
            </Button>
          </Link>
        </div> */}
      {/* </Navbar> */}

      <TableWithLoading
        className="style-table-customer"
        isLoading={isLoading}
        columns={columns}
        data={users}

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


export default UserView;