
import React from 'react';
import Select from 'react-select';

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    //borderBottom: '2px dotted green',
    color: state.isSelected ? '#FFFFFF' : 'black',
    //backgroundColor: state.isSelected ? '#1c1c38' : 'white',
    // color: '#000000',
    textAlign: 'left',
  }),
  control: (provided) => ({
    ...provided,
    backgroundColor: '#FFFFFF',
    color: '#000000',
    // marginTop: "5%",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#000000'
  })
}
class TextInput extends React.Component {


  render() {

    const inputType = this.props.type || "text"

    return (


      <div className="row row-xs align-items-center mg-b-20">

        <div className={`text-left ${this.props.wrap ? "col-md-12" : "col-md-3"}`}>
          <label className="mg-b-0">{this.props.label} <span>{this.props.required && <i className='text-danger'>*</i>}</span></label>
        </div>

        <div className={`mg-t-5 mg-md-t-0 ${this.props.wrap ? "col-md-12" : "col-md-9"}`}>


          {inputType !== "textarea" && inputType !== "select" &&
            <>
              <input
                type={inputType || "text"}
                className="form-control"
                placeholder={this.props.placeholder || this.props.label}
                onChange={this.props.onChange}
                value={this.props.value}
                name={this.props.name}
                autoFocus={this.props.autoFocus}
                readOnly={this.props.readonly || false}
                required={this.props.required || false}
              />
              {this.props.infoc && <span className="mt-5"> {this.props.infoc} </span>}


            </>
          }

          {inputType === "textarea" &&
            <textarea
              type={inputType}
              className="form-control"
              placeholder={this.props.placeholder || this.props.label}
              onChange={this.props.onChange}
              value={this.props.value}
              readOnly={this.props.readonly || false}
              required={this.props.required || false}
              name={this.props.name}
            />}

          {inputType === "select" &&

            <Select
              options={this.props.options}
              className={this.props.className || " form-input"}
              onChange={this.props.onChange}
              placeholder={this.props.placeholder || this.props.label}
              value={this.props.value}
              styles={customStyles}
            />

          }

        </div>


      </div>




    );


  }
}

export default TextInput;