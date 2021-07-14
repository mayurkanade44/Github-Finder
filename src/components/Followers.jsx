import React from 'react'
import { useGithubContext } from '../context/github_context'

const Followers = () => {
    const {followers} = useGithubContext()
    return (
      <>
      <h3 className='title'>Followers</h3>
        <div className="followers-card">
          {followers.map((follower, index) => {
            const { avatar_url: img, html_url, login } = follower;
            return (
              <div className="row" key={index}>
                <img className="col followers-img" src={img} alt={login} />
                <div className="col-9">
                  <h6>{login}</h6>
                  <a href={html_url}>{html_url}</a>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
}

export default Followers
