import React from 'react'; 

class AddFishForm extends React.Component {
  createFish(event) {
    event.preventDefault();
    console.log('Gonna make some fish! ');
    const fish = {
      name: this.name.value,
      price: this.price.value,
      status: this.status.value,
      desc: this.desc.value,
      image: this.image.value,
    } 
    this.props.addFish(fish);
    this.fishForm.reset(); 
  }


  render() {
    return (
      <form ref={(input) => this.fishForm = input} className="fish-edit" onSubmit={this.createFish.bind(this)}>
        <input ref={(input) => this.name = input} type="text" placeholder="Fish Name" />
        <input ref={(input) => this.price = input} type="text" placeholder="Fish Price" />
        <select ref={(input) => this.status = input} name="" id="">
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea ref={(input) => this.desc = input} placeholder="Fish Desc"></textarea>
        <input ref={(input) => this.image = input} type="text" placeholder="Fish Image" />
        <button type="submit">+ Fish Item</button>
      </form>
    )
  }
}

AddFishForm.propTypes = {
  addFish: React.Prop.types.func.isRequired
}

export default AddFishForm;
 