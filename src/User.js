import React from 'react';

class User extends React.Component{
 render(){
 	return (
      <ul>
      {this.props.profiles.map((profile) => (

          <li key={profile.userID}>
            {`${this.props.users[profile.id].name}'s favorite movie is ${this.props.movies[profile.favoriteMovieID].name}`}
          </li>
        ))}
      </ul>
    )
 }
}

export default User;