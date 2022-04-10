import React, {useState} from "react";

// COMPONENTS
import ListView from "components/CharactersList/ListView";

// GQL
import {Character, GetCharactersQuery, useGetCharactersQuery} from "graphql/graphql-gen";

const CharactersList: React.FC = () => {
    const [characters, setCharacters] = useState<Character[]>([])

    const {loading} = useGetCharactersQuery({
        variables: {page: 1},
        onCompleted: (data: GetCharactersQuery) => {
            setCharacters(data.characters?.results as Character[] || [])
        }
    })

    return <>
        <ListView list={characters} />
    </>
}

export default CharactersList