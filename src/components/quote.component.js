
import React from "react";
import {connect} from "react-redux";
import actions from '../actions'
import { bindActionCreators } from 'redux'
import quotes from '../data/quotes'

class Quote extends React.Component {


    componentDidMount() {
        this.props.fetchquotesAction();
        this.props.getRandomQuote();

    }
    getRandomQuote = ()=> {
        this.props.getRandomQuote();
    }




    render() {
        if (!this.props.quotes && !this.props.quote){
            return <p>Loading</p>
        }


        const quote = this.props.quote;

        return   <div className="Quote" id='quote-box'>

            <blockquote className="quote-box">
                <p className="quotation-mark">
                    “
                </p>
                <p className="quote-text" id='text'>
                    {quote.title}
                </p>
                <hr/>
                    <div className="blog-post-actions">
                        <p className="blog-post-bottom pull-left" id={'author'}>
                            {quote.author}
                        </p>
                        <p className="blog-post-bottom pull-right">

                            <a id='tweet-quote' className="btn btn-primary" href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote.title}`} >Tweet</a>

                            <a onClick={this.getRandomQuote
                            } id='new-quote' className="btn btn-success btn-lg float-sm-right"  >Next</a>

                        </p>
                    </div>
            </blockquote>



        </div>

    }
}


const mapStateToProps =  (state)=> {

    return {
        quotes: state.quotesList.quotes,
        quote: state.quotesList.quote,
    }
}

const mapDispatchToProps = dispatch => ({

    ...bindActionCreators(
        {
            fetchquotesAction: () =>   dispatch(actions.fetchquotesAction()),
            getRandomQuote: () =>   dispatch(actions.getRandomQuote(quotes)),
        },
        dispatch,
    ),
})

export default connect(mapStateToProps,mapDispatchToProps)(Quote)






