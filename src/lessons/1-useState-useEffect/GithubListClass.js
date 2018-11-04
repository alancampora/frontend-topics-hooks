import React from "react";

export default class GithubListClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            commits: [
            ]
        };
        this.nextPage = this.nextPage.bind(this);
        this.firstPage = this.firstPage.bind(this);
    }

    nextPage(){
        this.setState({page: this.state.page + 1}, () => this.loadGithubCommits());
    }

    firstPage(){
        this.setState({page: 1}, () => this.loadGithubCommits());
    }


    loadGithubCommits(){
        const {page}= this.state;
        fetch(`https://api.github.com/search/commits?q=repo:facebook/react+css&page=${page}`, {
            method: "GET",
            headers: new Headers({"Accept": "application/vnd.github.cloak-preview"}),
        })
            .then(data => data.json())
            .then(response => this.setState({commits: response.items}))
            .catch(error => console.log(error))
    }

    componentDidMount() {
        this.loadGithubCommits();
    }

    render() {
        return (
            <div>
                {this.state.commits.length !== 0 
                && <button onClick={this.nextPage}> next page </button>}

                {this.state.commits.length === 0 
                && <button onClick={this.firstPage}> first Page </button>}

                {this.state.commits.map(c => (
                    <div key={c.sha}> 
                        {
                            c.commit && (
                                <div className="commit-container">
                                    <p> {c.commit.committer.name}</p>
                                    <p> {c.commit.message}</p>
                                </div>
                            )
                        }
                    </div>
                ))}
            </div>
        );
    }
}
