class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: window.exampleVideoData,
      videos: window.exampleVideoData[0],
      options: {
        query: 'cats',
        max: 5,
        key: 'AIzaSyBbAYqDY8BOJD58Z970pm6L6fKHG9jE3Ms',
      },
    }
    // console.log(this.state.videos)
  //this.videoOnClick = this.videoOnClick.bind(this)
  }
  videoOnClick (video) {
    this.setState({
      videos: video,
    })
  }
  componentDidMount() {
    searchYouTube(this.state.options, this.loadYouTube.bind(this) )
  }
  loadYouTube(youTubeData) {
    console.log(youTubeData)
    this.setState({
      data: youTubeData,
    })
    this.setState({
      videos: youTubeData[0],
    })
  }
  querySearch(event) {
    var result = $("#search").val();
    this.setState({
      options: {
        query: result,
        max: 5,
        key: 'AIzaSyBbAYqDY8BOJD58Z970pm6L6fKHG9jE3Ms',
      },
    })
    $("#search").val('');
    searchYouTube(this.state.options, this.loadYouTube.bind(this) )
    console.log('event', result)
    console.log(this.state.options)
  }

  render () {
    return (
		  <div>
		    <Nav querySearch={this.querySearch.bind(this)}/>
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
