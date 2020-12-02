import React, { useState, useEffect } from 'react';
import { Button, Form, Navbar, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IoIosAddCircle } from 'react-icons/io'


import '../../../styles/ButtonStyle.css'
import '../../../styles/LabelStyle.css'
import '../../../styles/ChapterPage.css'

import { TableWithLoading } from '../components'
import { list } from '../../../services/ChapterAPI';

function ChapterView(props) {
  const columns = [{
    name: 'Tên chương',
    selector: 'name',
    sortable: true,
    width: '200px',
    wrap: true,
    hide: 'sm'
  },
  {
    name: 'Chương',
    selector: 'index',
    sortable: true,
    width: '200px',
    wrap: true
  },
  {
    name: 'Tên truyện',
    selector: 'storyId.name',
    sortable: true,
    width: '180px',
    center: true,
    wrap: true
  },
  {
    name: "",
    width: 170,
    cell: (row) => {
      return (
        <Link to={`/admin/chapters/edit/${row.id}`}>
          <Button variant="success" className="btn-padding-9 btn-add-tablet">
            Chi tiết          </Button>
        </Link>
      )
    }
  },
  ]
  const [textSearchValue, setTextSearchValue] = useState('');
  const [modalShow, setModalShow] = useState(false);
  const [currentRow, setCurrentRow] = useState({});
  //   const [hotesls, setHotels] = useState([{ 'name': 'Monarque Hotel', 'street_address': '238 Vo Nguyen Giap Phuoc My, Son Tra District, Da Nang 550000 Vietnam', 'phone': null, 'price': null, },
  // ])
  const [chapters, setChapter] = useState([])

  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    list()
      .then(res => setChapter(res.data))
      .finally(() => setLoading(false))
  }, [])
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
      <h1>Quản lý chương</h1>
      <Navbar className="justify-content-between">
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
        <div>
          <Link to="/admin/chapters/new">
            <Button variant="success" className="btn-padding-9 btn-add-tablet">
              Thêm Chuơng <IoIosAddCircle />
            </Button>
          </Link>
        </div>
      </Navbar>

      <TableWithLoading
        className="style-table-customer"
        isLoading={isLoading}
        columns={columns}
        data={chapters}

        noDataComponent='Không có dữ liệu'
        persistTableHead={true}

        onChangePage={page => {
          console.log(page)
        }}
        onChangeRowsPerPage={(currentRowsPerPage, currentPage) => {
          console.log(currentRowsPerPage, currentPage)
        }}

      />
    </div>

  );
}


export default ChapterView;