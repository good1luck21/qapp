import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link as L} from 'react-router-dom';

const Index = (props) => {
    const [questions, setQuestions] = useState();
    const [answer, setAnswer] = useState([]);
    const [category, setCategory] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8001/questions")
        .then(function (res) {
            setQuestions(res.data.qs);
            setAnswer(res.data.as);
            setCategory(res.data.cs);
            console.log(res.data);
          })
        .catch((errors) => {
        })
    }, [])

    return(
      <div className="container">
      <div className="row">
      {questions === null && <p>Loading questions...</p>}
          {
            questions && questions.map(question => (
              <div key={question.id} className="col-sm-12 col-md-4 col-lg-3">
                <L to={`/question/${question.id}`}>
                  <div className="card text-white bg-success mb-3">
                    <div className="card-header">Answer: {
                      answer && answer.map(ans => (
                        question.id === ans.id ? <p key={ans.id}>{ans.content}</p> : ""
                      ))
                    }</div>
                    <div className="card-body">
                      <h4 className="card-title">{question.title}</h4>
                      {
                      category && category.map(cate => (
                          question.category_id === cate.attributes.id ? <h6 key={cate.attributes.id}>カテゴリー：{cate.attributes.name}</h6> : ""
                      ))
                      }
                      <p className="card-text">{question.description}</p>
                    </div>
                  </div>
                </L>
              </div>
            ))
          }
      </div>
    </div>
    )
}

export default Index;