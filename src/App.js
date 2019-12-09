import React from 'react';
import { Layout } from 'antd';
import { Route, Switch } from 'react-router-dom'

const { Header, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header>Header</Header>
      <Content>
        <Switch>
          <Route exact path="/" component={() => <div>Home</div>} />
          <Route exact path="/login" component={() => <div>login</div>} />
          <Route exact path="/signup" component={() => <div>signup</div>} />
        </Switch>
      </Content>
    </Layout>
  );
}

export default App;
