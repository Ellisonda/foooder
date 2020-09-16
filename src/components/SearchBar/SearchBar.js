import React from 'react';
import ReactDOM from 'react-dom';
import './SearchBar.css';



class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state={
            term: '',
            location: '',
            sortBy: 'best_match',
            }
            this.sortByOptions= {
                'Best Match': 'best_match',
                'Highest Rated': 'rating',
                'Most Reviewed': 'review_count'
                
            }
            this.handleTermChange=this.handleTermChange.bind(this);
            this.handleLocationChange=this.handleLocationChange.bind(this);
            this.handleSearch=this.handleSearch.bind(this);
            this.handleKeyPress=this.handleKeyPress.bind(this);
        }

        handleSortByChange(sortByOption){  //OJO, N SE SI EL 1 O 2 SORTBYOPTION DEBERIAN LLEVAR THIS.
            this.setState({
                sortBy: sortByOption
            })
        }
        handleTermChange(event){
            this.setState({
                term: event.target.value
            })

        }
        handleLocationChange(event){
            this.setState({
                location: event.target.value
            })
        }
        handleSearch(event){
            this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy) //OJOOOOOOOOOOOOOO
            event.preventDefault()
        }

        getSortByClass(sortByOption){
            if(this.state.sortBy===sortByOption){
                return 'active'
            }else{
                return '';
            }
            

        }
        handleKeyPress(event){
            if(event.key === 'Enter'){
                this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
            }
        }
        
    
    
    renderSortByOptions(){
    return Object.keys(this.sortByOptions).map(sortByOption=>{ 
        
            const sortByOptionsValue= this.sortByOptions[sortByOption]
            return <li key={sortByOptionsValue}
            className={this.getSortByClass(sortByOptionsValue)} onClick={this.handleSortByChange.bind(this, sortByOptionsValue)}>{sortByOption}</li>  //OJO. N SEGURO SI DEBE LLEVAR EL THIS
                
        }); 
    } 
    render(){
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                    {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses"  onChange={this.handleTermChange} onKeyPress={this.handleKeyPress}/>
                    <input placeholder="Where?" onChange={this.handleLocationChange} onKeyPress={this.handleKeyPress}/>
                </div>
                <div className="SearchBar-submit">
                    <a onClick={this.handleSearch}>Let's Go</a>
                </div>
            </div>
        )
    }  
}


export default SearchBar;