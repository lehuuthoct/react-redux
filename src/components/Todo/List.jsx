import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './List.css';

const List = props => (
  <ul>
    <ReactCSSTransitionGroup
      transitionName="todo"
      transitionAppear={true}
      transitionEnterTimeout={500}
      transitionLeaveTimeout={300}
      transitionAppearTimeout={200}
    >
      {props.items.map((item, key) => (
        <li
          key={key}
          className={` ${item.completed ? 'completed' : 'pending'} `}
        >
          {item.task}

          {/* actions */}
          <div className="actions">
            {/* mark complete */}
            <span
              className={`${item.completed ? 'hide' : 'done'}`}
              onClick={() => props.markAsCompleted(item.id)}
            >
              <i className="fa fa-check" />
            </span>

            {/* remove */}
            <span className="trash" onClick={() => props.removeTask(item.id)}>
              <i className="fa fa-trash" />
            </span>
          </div>
        </li>
      ))}
    </ReactCSSTransitionGroup>
  </ul>
);

export default List;
