import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { storage } from "../libs/Firebase";
import React, { useState } from "react";
import { Image, Input, Select } from "../components";
import axios from "axios";
import { useAuthContext } from "../contexts/AuthContext";
import { uploadFirebase } from "../libs/FirebaseStorage";

const AddProduct = () => {
  const [inputs, setInputs] = useState(null);
  const [files, setFiles] = useState<any []>([])
  const { user } = useAuthContext();

  const handleChange = (e: any) => {
    setInputs((prev: any) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleFiles = (e: any) => {
    // const fileUrl = URL.createObjectURL(e.target.files[0]);
    setFiles((prev: any) => {
      return [...prev, e.target.files![0]]
    })
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const images = await uploadFirebase(files)

    // @ts-ignore
    axios.post("/product/new", { ...inputs, sellerID: JSON.parse(user), image: images }).then((res) => {
      console.log(res.data);
    }).catch((err) => {
      console.log(err);
    });
  };

  return (
    <div className="">
      <h3 className="font-medium mb-3 text-xl">Add Product</h3>
      <div className="">
        <form action="" onSubmit={handleSubmit}>
          <div className="flex flex-wrap gap-x-5 gap-y-3">
            <Input
              type="text"
              placeholder="Name"
              name="name"
              onchange={handleChange}
            />
            <Input
              type="text"
              placeholder="Model"
              name="model"
              onchange={handleChange}
            />
            <Input
              type="number"
              placeholder="Price"
              name="price"
              onchange={handleChange}
            />
            <Input
              type="number"
              placeholder="Runned by"
              name="runnedBy"
              onchange={handleChange}
            />
            <Input
              type="text"
              placeholder="Fuel"
              name="fuel"
              onchange={handleChange}
            />
            <Input
              type="text"
              placeholder="Color"
              name="color"
              onchange={handleChange}
            />
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-3 mt-3">
            <Select
              localName="Transmission"
              name="transmission"
              items={["Automatic", "Manuel"]}
              onchange={handleChange}
            />
            <Select
              name="varient"
              localName="Varient"
              items={["Full option", "Base option", "Middle Option"]}
              onchange={handleChange}
            />
            <Select
              localName="Accident History"
              name="accidentHistory"
              items={["No", "1", "2", "3", "4"]}
              onchange={handleChange}
            />
            <Select
              name="owner"
              localName="Owner"
              items={["1st", "2nd", "3rd", "4th", "5th"]}
              onchange={handleChange}
            />
            <Select
              name="type"
              localName="Type"
              onchange={handleChange}
              items={["Hashback", "Sedan", "XUV", "Notchback"]}
            />
            <Select
              name="seater"
              localName="Seater"
              items={["2", "5", "7"]}
              onchange={handleChange}
            />
            <Select
              name="emi"
              localName="EMI option"
              items={["Yes", "No"]}
              onchange={handleChange}
            />
            <Select
              localName="Insurance"
              name="insurance"
              items={["1st part", "2nd part", "3rd part"]}
              onchange={handleChange}
            />
          </div>

          <textarea
            placeholder="Description"
            name="description"
            className="mt-3 border-[1px] outline-none text-sm px-3 py-2 w-full"
            required
            onChange={handleChange}
          ></textarea>

          <h3 className="text-sm font-medium py-2">Add minimum of 3 images</h3>
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-3">
            <Image label="Main image" name="main" onchange={handleFiles} />
            <Image label="Front" name="front" onchange={handleFiles} />
            <Image label="Left" name="left" onchange={handleFiles} />
            <Image label="Right" name="right" onchange={handleFiles} />
            <Image label="Back" name="back" onchange={handleFiles} />
            <Image label="Roof" name="roof" onchange={handleFiles} />
            <Image label="Under" name="under" onchange={handleFiles} />
            <Image label="Bonet" name="bonet" onchange={handleFiles} />
            <Image label="Dicky" name="dicky" onchange={handleFiles} />
            <Image label="Front interior" name="frontInterior" />
            <Image
              label="Back interior"
              name="backInterior"
              onchange={handleFiles}
            />
          </div>

          <div className="mt-5 flex">
            <button
              className="px-7 py-2 rounded-md text-white bg-blue-500 text-sm border-[1px] font-medium hover:bg-transparent
            hover:border-blue-500 hover:text-blue-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
