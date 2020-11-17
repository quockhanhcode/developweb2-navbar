import React, { Component } from 'react'

export default class search extends Component {
    render() {
        return (
            <div className="nav-bar">
        <ul>
          <li className="active">
            <i className="fas fa-search" />
            <div className="search-box">
              <input placeholder="Tìm kiếm..." type="text" />
              {/* <input type="button" defaultValue="search" /> */}
            </div>
          </li>
        </ul>
      </div>
        )
    }
}
