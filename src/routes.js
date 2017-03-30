/**
 * @author  https://github.com/silence717
 * @desc []
 * @date 2017-03-22
 */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AbputPage';
import CoursesPage from './components/course/CoursesPage';
import ManageCoursePage from './components/course/ManageCoursePage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}></IndexRoute>
    <Route path="courses" component={CoursesPage}></Route>
    <Route path="course" component={ManageCoursePage}></Route>
    <Route path="course/:id" component={ManageCoursePage}></Route>
    <Route path="about" component={AboutPage}></Route>
  </Route>
);
