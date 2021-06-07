import React, { Component } from 'react';
import {
    Form,
    FormInput,
    FormButton,
    formContainer,
} from './SearchForm.module.css';

class SearchForm extends Component {
    state = { searchQuery: '' };
    handleInput = event => {
        this.setState({ searchQuery: event.target.value });
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        // console.log(this.state);
        this.setState({ searchQuery: '' });
    };
    render() {
        const { handleInput, handleSubmit } = this;
        const { searchQuery } = this.state;
        return (
            <>
                <div className={formContainer}>
                    <form className={Form} onSubmit={handleSubmit}>
                        <input
                            className={FormInput}
                            placeholder="Search movies"
                            onChange={handleInput}
                            value={searchQuery}
                        />
                        <button type="submit" className={FormButton}></button>
                    </form>
                </div>
            </>
        );
    }
}

export default SearchForm;
