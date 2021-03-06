import React from "react";

// GQL
import { Character} from "graphql/graphql-gen";

// COMPONENTS
import {List, ListRow, ListBody, ListHead, ListHeadItem, ListItem} from "./styles";

const ListView: React.FC<React.PropsWithChildren<{list: Character[]}>> = ({list}) => {
    return <>
        <List>
            <ListHead>
                <ListRow isHeader>
                    <ListHeadItem>Slno</ListHeadItem>
                    <ListHeadItem>Name</ListHeadItem>
                    <ListHeadItem>Status</ListHeadItem>
                    <ListHeadItem>Gender</ListHeadItem>
                    <ListHeadItem>Location</ListHeadItem>
                    <ListHeadItem>Origin</ListHeadItem>
                </ListRow>
            </ListHead>
            <ListBody>
                {
                    list.map((character: Character, index: number) => (
                        <ListRow key={index}>
                            <ListItem>{character.id}</ListItem>
                            <ListItem>{character.name}</ListItem>
                            <ListItem>{character.status}</ListItem>
                            <ListItem>{character.gender}</ListItem>
                            <ListItem>{character.location?.name}</ListItem>
                            <ListItem isOriginUnknown={character.origin?.name === 'unknown'}>{character.origin?.name}</ListItem>
                        </ListRow>
                    ))
                }
            </ListBody>
        </List>
    </>
}

export default ListView