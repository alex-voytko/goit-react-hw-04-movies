import React, { Component } from 'react';
import { Form, FormInput, formContainer } from './SearchForm.module.css';
import { FormButton } from '../Button/Button.module.css';
import PropTypes from 'prop-types';
import Button from '../Button';

class SearchForm extends Component {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
    };
    state = { searchQuery: '' };

    handleInput = event => {
        this.setState({ searchQuery: event.target.value });
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state);
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
                        <Button type="submit" title="" className={FormButton} />
                    </form>
                </div>
            </>
        );
    }
}

export default SearchForm;
