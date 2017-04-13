class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      flag: true,
      data: window.exampleVideoData,
      videos: window.exampleVideoData[0],
      options: {
        query: 'monkeys',
        max: 5,
        key: 'AIzaSyBbAYqDY8BOJD58Z970pm6L6fKHG9jE3Ms',
      },
    }
  }

  videoOnClick (video) {
    this.setState({
      videos: video,
    })
  }

  componentDidMount() {
    searchYouTube(this.state.options, this.loadYouTube.bind(this));
  }

  loadYouTube(youTubeData) {
    this.setState({
      data: youTubeData,
    })
    this.setState({
      videos: youTubeData[0],
    })
    setTimeout(() => {
      this.setState({
        flag: true,
      })
    }, 500);
  }

  querySearch(event) {
    var result = $("#search").val();
    var options = {
      query: result,
      max: 5,
      key: 'AIzaSyBbAYqDY8BOJD58Z970pm6L6fKHG9jE3Ms',
    }
    if (this.state.flag) {
      searchYouTube(options, this.loadYouTube.bind(this));
    }
    this.setState({
      lag: false,
    })
    $("#search").val('');
  }

  typeSearch() {
    var result = $("#search").val();
    var options = {
      query: result,
      max: 5,
      key: 'AIzaSyBbAYqDY8BOJD58Z970pm6L6fKHG9jE3Ms',
    }
    searchYouTube(options, this.loadYouTube.bind(this));
  }

  render () {
    return (
		  <div>
		    <Nav querySearch={this.querySearch.bind(this)} typeSearch={this.typeSearch.bind(this)}/>
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
