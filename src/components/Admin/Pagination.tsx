import React from 'react'
import ReactPaginate from 'react-paginate'
import './Pagination.css' // Import file CSS cho phân trang

interface PaginationProps {
    pageCount: number
    onPageChange: (page: number) => void
}

const Pagination: React.FC<PaginationProps> = ({ pageCount, onPageChange }) => {
    return (
        <ReactPaginate
            previousLabel={'<'}
            nextLabel={'>'}
            breakLabel={'...'}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={(data) => onPageChange(data.selected)}
            containerClassName={'pagination'}
            activeClassName={'active'}
        />
    )
}

export default Pagination
