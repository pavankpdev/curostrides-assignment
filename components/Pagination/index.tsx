import React from "react";

// COMPONENTS
import {PaginationGroup, NextBtn, PrevBtn, CurrentPage} from "./styles";

// GQL
import {Info} from "graphql/graphql-gen";

const Pagination: React.FC<React.PropsWithChildren<Info & {handlePageChange: (pageNum: number) => void, currentPage: number}>> = (props) => {

    const prevPage = () => {
        if(!props.prev) return
        props.handlePageChange( props.prev as number)
    }

    const nextPage = () => {
        if(!props.next) return
        props.handlePageChange( props.next as number)
    }

    return <>
        <PaginationGroup>
            <PrevBtn disabled={!props.prev} onClick={prevPage}>Prev</PrevBtn>
            <CurrentPage>{props.currentPage}</CurrentPage>
            <NextBtn disabled={!props.next} onClick={nextPage}>Next</NextBtn>
        </PaginationGroup>
    </>
}

export default Pagination;