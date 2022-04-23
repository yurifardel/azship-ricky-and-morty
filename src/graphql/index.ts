import { gql } from '@apollo/client'

export  const GET_ALL_CHARACTERS =  gql`
  query {
    characters {
      info {count}
      results {
        id, 
        name, 
        status, 
        species, 
        type, 
        gender, 
        image, 
        created, 
      }
    }
  
    episodes {
       results {
        id, 
        name, 
        air_date, 
        episode, 
        created,
        characters {
          image,
          name,
          id
        }
      }
    }
  }
`