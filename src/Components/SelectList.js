import React from 'react'
import Select from 'react-select';
import '../scss/Components/selectList.scss'

let options = [];

for (let i=1; i<51; i++) {
        options.push({value:i, label:i})
}
console.log('options', options)

const customStyles = {

    container: (provided, state,isFocused) => ({
        ...provided,
        border: 'none',
        outline: 'none',
        fontSize: 'none',
    }),
    menu: (provided, state) => ({
        ...provided,
        width: state.selectProps.width,
        borderBottom: 'none',
        color: state.selectProps.menuColor,
        outline: 'none',
        borderRadius: 'none',
        background: 'rgba(0,0,0,0.1)',
        left: '-19%',
        boxShadow: ' 0 0 10px rgba(0,0,0,0.1)',


    }),
    menuList: (provided, state) => ({
        ...provided,
        maxHeight: '145px',
        height: '100%'
    }),

    option: (provided, state) => ({
        ...provided,
        background: 'rgba(0,0,0,0)',
        width: '40px',
        cursor: 'pointer'
    }),

    control: (provided, state) => ({
        ...provided,
        background: 'transparent',
        border: 'none',
        borderBottom: '3px solid #ffffff',
        borderRadius: '0',
        outline: 'none',
        display: 'flex',
        width: '64px',
        cursor: 'pointer'
    }),



    a11yText: (provided, state) => ({
        ...provided,
        background: 'transparent',
        border: 'none',
        outline: 'none',



    }),

    ValueContainer: (provided, state) => ({
    ...provided,
        background: 'transparent',
        border:'none',
        outline: 'none',
        width: '20px',
        padding: '0 2px'
    }),
    Input: (provided, state) => ({
        ...provided,
        background: 'transparent',
        border:'none',
        outline: 'none'

    }),

    indicatorSeparator: (provided, state) => ({
        ...provided,
        backgroundColor: 'none',
        outline: 'none',
        margin: '0',
        width: '0'
    }),
    singleValue: (provided, state) => ({
    ...provided,
        color: '#ffffff'
    }),
    placeholder: (provided, state) => ({
        ...provided,
        color: '#ffffff'
    }),

}


class SelectList extends React.Component {
    state = {
        selectedOption: null,
    };
    handleChange = selectedOption => {
        this.setState(
            { selectedOption },
            () => console.log(`Option selected:`, this.state.selectedOption)
        );
    };

    render() {
        const { selectedOption } = this.state;

        return (
            <Select
                classNamePrefix='select'
                styles = {customStyles}
                value={selectedOption}
                onChange={this.handleChange}
                options={options}
                width='122px'
                menuColor='#ffffff'
                placeholder={'1'}
            />
        );
    }
}

export default SelectList