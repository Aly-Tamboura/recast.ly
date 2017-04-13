class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: window.exampleVideoData,
      videos: window.exampleVideoData[0],
    }
    console.log(this.state.videos)
  //this.videoOnClick = this.videoOnClick.bind(this)
  }
  videoOnClick (video) {
    this.setState({
      videos: video,
    })
  }


  render () {
    return (
		  <div>
		    <Nav />
			  <div className="col-md-7">
		  	  <VideoPlayer video={this.state.videos} />
		    </div>

			  <div className="col-md-5">
		  	 <VideoList videoOnClick={this.videoOnClick.bind(this)} videos={this.state.data} />
			  </div>
		  </div>
  	)
  }
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
