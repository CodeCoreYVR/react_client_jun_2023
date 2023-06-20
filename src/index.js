import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

// We are now adding props that are coming as arguements from where we call QuestionDetails
// (in this case QuestionShowPage), but deconstrcuted 
const QuestionDetails = ({title, body, author, view_count, created_at, updated_at}) => {
  return(
    <div>
        <h2>{title}</h2>
        <p>{body}</p>
        <p>By {author.full_name}</p>
        <p>
          <small>Seen {view_count} times</small>
          <small>Created: {created_at.toLocaleString}</small>
          <small>Last Editted: {updated_at.toLocaleString}</small>
        </p>
    </div>
  )
}

const AnswerDetails = () => {
  return (
    <div>
      <p>This is the body of my answer</p>
      <p>By Who Knows</p>
      <p>
        <small>Created at:</small>
        <small>1 day ago</small>
      </p>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // StrictMode is a development only component. We might get rid of this later. But what it does 
  // is, it will search through the React components that you write and it will tell you if there are 
  // things you need to be fix. It will give you hints
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  // App here is the root component. That is because of how React is structured. There is always
  // one main component that renders out all of the rest of the components
  // So App is the very first component that render out all of the rest of the components we will have, and it will have children and
  // the children will have childern, etc. There is a tree of components

  // We are not using strict mode for now
  // With JSX, we had to access the React element, but with JSX and babbel we can
  // now, write the component as a html tag
  <main>
    <QuestionDetails 
    title = "What is your favourite colour?" 
    body = "Red, blue, green, etc..."
    author = {{full_name: "John Doe"}}
    view_count = {34}
    created_at = {new Date()}
    updated_at = {new Date()}
    />
    <AnswerDetails/>
  </main>
  // Note, with React and JSX, all tags must be closed
  // for example, an html element self closing tag like <hr> might still work for regular html
  // but for react, it must be closed like <hr/> or <hr></hr>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
