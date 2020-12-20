import React ,{useState}from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

const AddItems=() =>{
    const [itemData , setItemsData] = useState ({
        category: "",
        quantity:"",
        wights:"",
        description:"",
        selectedFile: ''
    })
    const onSubmit =()  =>{

    }
    return (
        <div>
        
        <h1>Form</h1>
        <br />
        <div className = "container">
          <form className="text-center border border-light p-9" action="#!"  >
            <p className="h4 mb-4">Help your environment by recycling trash</p>
            <br />
                <div className="col">
                <label>Select Category</label>
                <select
                 
                required="true"
                  className = "form-control" 
                   value = {itemData.category} 
                  onChange = {(e) => setItemsData({ ...itemData ,category : e.target.value})}
                  text-align = "center"
                 >
                     <option value = "Iron">Iron</option>
                    <option value = "wood">wood</option>
                    <option value = "glass">glass</option>
                    <option value = "plastic">plastic</option>
                   
                    </select>
                    </div>
                     <br />
                <div className="col">
                <label>Quantity</label>
                <input 
                required="true"
                  type = "text" 
                  className = "form-control" 
                   value = {itemData.quantity} 
                  onChange = {(e) => setItemsData({ ...itemData ,quantity : e.target.value})}
                  text-align = "center"
                  placeholder = "Insert Quantity"/>
                </div>
                <br />

                <div className="col">
                <label>Wights</label>
                <input 
                required="true"
                  type = "text" 
                  className = "form-control" 
                   value = {itemData.wights} 
                  onChange = {(e) => setItemsData({ ...itemData ,wights : e.target.value})}
                  text-align = "center"
                  placeholder = "Insert Wights"/>
                </div>
                <br />
                <div className = "col">
                  <label>Description  </label>
                  <input 
                    type = "text" 
                    required="true"
                    className = "form-control" 
                     value = {itemData.description} 
                  onChange = {(e) => setItemsData({ ...itemData ,description : e.target.value})}
                    placeholder = " Insert a description "/>
                </div>

                <br />

                {/* <div className = "col">
                            <label>Image</label>
                           <div  id='image' > <img src={this.state.url || "http://via.placeholder.com/50*50"} 
                            alt="firebase"  /></div> 
                           <input  type="file" onChange={this.handleChangeImage.bind(this)} className="btn btn-deep-orange darken-4" />
                           <button  onClick={this.handleUpload.bind(this)} className="btn btn-deep-orange darken-4">Upload</button>
                           </div>
                            <br />
                  <br /> */}

                <div className = "col">
              <label>Image</label>
              <FileBase type="file" multiple={true} 
               onDone={({ base64 }) => setItemsData({ ...itemData, selectedFile: base64 })} />
                </div>

              <br /> 
                <div>
                <button type="submit" onClick= {onSubmit} className="btn btn-deep-orange darken-4">Submit</button>
                </div>


          </form>
                
        </div>
        </div>
        

    );
}

export default AddItems;