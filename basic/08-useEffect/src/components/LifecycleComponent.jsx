import React from 'react';

class LifecycleComponent extends React.Component {
  constructor() {
    super();
    console.log('LifecycleComponent - constructor()');
  }
  // componentWillMount() {
  //   console.log('LifecycleComponent - will mount()');
  // }
  componentDidMount() {
    console.log('LifecycleComponent - did mount()');
  }
  // componentWillUpdate() {
  //   console.log('LifecycleComponent - will update()');
  // }

  componentDidUpdate() {
    console.log('LifecycleComponent - did update()');
  }

  componentWillUnmount() {
    console.log('LifecycleComponent - will un-mount()');
  }
  render() {
    console.log('LifecycleComponent - render()');
    return (
      <div>
        <h1>I'm LifecycleComponent</h1>
      </div>
    );
  }
}

export default LifecycleComponent;
