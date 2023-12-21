import {Person} from '../types'

export const myProfileData: Person = {
  profilePicUrl: 'assets/profil.jpg',
  name : 'Marie',
  age: 21,
  bio: 'I like to eat and swim',
  birthday: '23 March',
  interests: ['Programming', 'Data Science', 'Gardening']
}
export  const friendsData: Person[] = [{
  name: 'Mark Bishop',
  profilePicUrl: 'assets/friend1.jpg',
  age: 35,
  bio: 'I love to swim and eat new food',
  birthday: '9/4/1960',
  interests: ['Swimming', 'Traveling', 'Languages'],
},
  {
    name: 'Caleb Mitchelle',
    profilePicUrl: 'assets/friend2.jpg',
    age: 113,
    bio: 'Love skiing and meet new people',
    birthday: '8/4/1910',
    interests: ['Fashion', 'Reading', 'Climbing'],
  }
]
