import React from "react"
import { connect } from "react-redux"

import Article from "../components/Article/Article"
import AddArticle from "../components/AddArticle/AddArticle"
import * as actionTypes from "../store/actionTypes";

const Articles = ({ articles }) => {
  const saveArticle = e => {
    e.preventDefault()
    // the logic will be updated later
  }
  return (
    <div>
      <AddArticle saveArticle={saveArticle} />
      {articles.map(article => (
        <Article key={article.id} article={article} />
      ))}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    articles: state.articles,
  }
}

const mapDispatchToProps = dispatch => {
    return {
        saveArticle: article =>
            dispatch({ type: actionTypes.ADD_ARTICLE, articleData: { article } }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Articles)