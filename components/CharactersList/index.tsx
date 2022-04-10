import React, {useState} from "react";

// COMPONENTS
import ListView from "components/CharactersList/ListView";
import Pagination from "components/Pagination";
import {LoadingText} from "components/CharactersList/styles";

// GQL
import {Character, useGetCharactersQuery, Info} from "graphql/graphql-gen";

const CharactersList: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<number>(1)

    const {loading, refetch, data } = useGetCharactersQuery({
        variables: {page: currentPage},
        onError: () => {
            alert('Something went wrong, please try again after some times')
        },
        nextFetchPolicy: 'cache-and-network',
        fetchPolicy: 'cache-and-network'
    })

    const updatePagination = async (pageNum: number) => {
        try {
            setCurrentPage(pageNum);
            await refetch({page: currentPage})
            return
        } catch (error) {
            alert('Something went wrong, please try again after some times')
        }
    }

    if(loading) {
        return  <LoadingText>
            Loading...
        </LoadingText>
    }

    return <>
        <Pagination {...(data?.characters?.info as Info)} currentPage={currentPage} handlePageChange={updatePagination}  />
        <ListView list={(data?.characters?.results as Character[]) || []} />
        <Pagination {...(data?.characters?.info as Info)} currentPage={currentPage} handlePageChange={updatePagination}  />
    </>
}

export default CharactersList