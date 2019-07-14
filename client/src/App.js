import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';

// import routes
import Home from './components/pages/Home/HomePage';
import Posts from './components/pages/Posts/PostsPage';
import Contact from './components/pages/Contact/ContactPage';
import NotFound from './components/pages/NotFound/NotFoundPage';
import AddPostPage from './components/pages/AddPostPage/AddPostPage';
import SinglePostPage from './components/pages/SinglePostPage/SinglePostPage';

class App extends React.Component {

  render() {
    return (
      <MainLayout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/posts/new" exact component={AddPostPage} />
          <Route path="/posts" exact component={Posts} />
          <Route path="/posts/postID" exact component={SinglePostPage} />
          <Route path="/contact" exact component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </MainLayout>
    );
  }

}

export default App;