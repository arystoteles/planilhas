import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const QUERY = graphql`
  query {
    allGoogleVendedoresSheet {
      edges {
        node {
          cidade
          endereco
          estado
          nome
        }
      }
    }
  }
`
const Index = () => {
  const data = useStaticQuery(QUERY)
  return (
    <div>
      <h1>Revendedores</h1>
      <pre>
        {data.allGoogleVendedoresSheet.edges.map(node => {
          return (<h3>{node.node.nome}</h3>)
        })}
      </pre>
    </div>
  )
}
export default Index