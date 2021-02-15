import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Show = (props) => {
    const [question, setQuestion] = useState("");
    const [answers, setAnswer] = useState([]);
    
    useEffect(() => {
      const { match: { params } } = props;
      axios.get(`http://localhost:8001/questions/${params.id}`)
      .then((res) => {
          console.log(res.data);
          setQuestion(res.data.q);
          setAnswer(res.data.as);
      })
      .catch((errors) => {
          console.log(errors);
      })
    }, [props])

    return(
            <div className="container">
                <div className="row">
                    <div className="jumbotron col-12">
                        <h1 className="display-3"> {question.title} </h1>
                        <p className="lead"> {question.content} </p>
                        <hr className="my-4" />
                        {
                            answers.map((answer, idx) => (
                                <p className="lead" key={idx}> {answer.content} </p>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
}

export default Show;