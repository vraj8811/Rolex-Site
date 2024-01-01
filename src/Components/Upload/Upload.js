import React, { useRef, useState } from 'react'
import Navbar from '../Navbar/Navbar';
import { uploadimg } from '../../assets'
import './Upload.css'

const Upload = () => {

    const [watchName, setWatchName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(null);
    const [isSale, setIsSale] = useState(false);
    const [isFeatured, setIsFeatured] = useState(false);
    const [isNewArrival, setIsNewArrival] = useState(false);
    const [imagePreviewUrl, setImagePreviewUrl] = useState(null);

    const fileInputRef = useRef(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        setImage(file);

        // Create a temporary URL for the selected image
        const imageUrl = URL.createObjectURL(file);
        setImagePreviewUrl(imageUrl);
    };

    const handleWatchNameChange = (event) => {
        setWatchName(event.target.value);
    };

    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    };

    const handleIsFeaturedChange = (e) => {
        setIsFeatured(e.target.checked);
    };

    const handleIsNewArrivalChange = (e) => {
        setIsNewArrival(e.target.checked);
    };

    const handleIsSaleChange = (event) => {
        setIsSale(event.target.checked);
    };

    const handleSave = () => {
        // Perform validation if needed

        if (!watchName || !price || !image) {
            console.error('Watch data is incomplete');
            return;
        }

        const isSaleString = isSale.toString();
        const isFeaturedString = isFeatured.toString();
        const isNewArrivalString = isNewArrival.toString();

        // Create a FormData object to send the data including the image
        const formData = new FormData();
        formData.append('name', watchName);
        formData.append('price', price);
        formData.append('image', image);
        formData.append('isSale', isSaleString);
        formData.append('isFeatured', isFeaturedString);
        formData.append('isNewArrival', isNewArrivalString);

        // Make API call to add watch data
        fetch('http://localhost:5000/api/addWatch', {
            method: 'POST',
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                // Handle success response if needed
                console.log('Watch added successfully', data);

                alert('Watch data stored successfully');

                // Reset the form by setting state variables back to initial values
                setWatchName('');
                setPrice('');
                setImage(null);
                setIsSale(false);
                setIsFeatured(false);
                setIsNewArrival(false);
                setImagePreviewUrl(null);
            })
            .catch((error) => {
                // Handle error
                console.error('Error adding watch:', error);
            });
    };

    return (
        <div id="upload" >
            <div className="Desktop" style={{ width: 1280, height: 1000, position: 'relative', background: 'white' }}>
                <Navbar />
                <div className="UploadNewWatch" style={{ color: '#2E2E2E', fontSize: 40, fontFamily: 'Roboto', fontWeight: '700', lineHeight: 2, wordWrap: 'break-word' }}>Upload new watch</div>
                <div className="InputField" style={{ width: 320, height: 70, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                    <div className="InputFieldBase" style={{ alignSelf: 'stretch', height: 70, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 6, display: 'flex' }}>
                        <div className="InputWithLabel" style={{ alignSelf: 'stretch', height: 70, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 6, display: 'flex' }}>
                            <div className="Label" style={{ color: '#344054', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', lineHeight: 0, wordWrap: 'break-word' }}>Watch Name</div>
                            <input type='text' placeholder='Enter' value={watchName} onChange={handleWatchNameChange} style={{ marginTop: 10, alignSelf: 'stretch', paddingLeft: 14, paddingRight: 14, paddingTop: 10, paddingBottom: 10, background: 'white', boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)', borderRadius: 8, overflow: 'hidden', border: '1px #D0D5DD solid', justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex' }} />
                        </div>
                    </div>
                    <div className="InputFieldBase" style={{ alignSelf: 'stretch', height: 70, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 6, display: 'flex' }}>
                        <div className="InputWithLabel" style={{ alignSelf: 'stretch', height: 70, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 6, display: 'flex' }}>
                            <div className="Label" style={{ color: '#344054', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', marginTop: 10, wordWrap: 'break-word' }}>Price</div>
                            <input type='text' placeholder='Enter' value={price} onChange={handlePriceChange} style={{ marginTop: 2, alignSelf: 'stretch', paddingLeft: 14, paddingRight: 14, paddingTop: 10, paddingBottom: 10, background: 'white', boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)', borderRadius: 8, overflow: 'hidden', border: '1px #D0D5DD solid', justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex' }} />
                        </div>
                    </div>
                    <div className="uploadfile">
                        <div className="InputWithLabel" style={{ alignSelf: 'stretch', height: 70, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 6, display: 'flex' }}>
                            <div className="Label" style={{ color: '#344054', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', marginTop: 10, wordWrap: 'break-word' }}>Upload Image</div>
                        </div>
                        <input
                            type="file"
                            accept="image/*"
                            style={{ display: 'none' }}
                            ref={fileInputRef}
                            onChange={handleImageUpload}
                        />
                        <div
                            className="Frame1"
                            style={{ top: -27, width: 300, height: 300, position: 'relative', borderRadius: 8, overflow: 'hidden', border: '1px #EEA651 solid' }}
                            onClick={() => fileInputRef.current.click()}
                        >
                            {imagePreviewUrl ? (
                                <img
                                    src={imagePreviewUrl}
                                    alt="preview"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            ) : (
                                <div className="UilImageUpload" style={{ width: 107, height: 107, left: 96, top: 96, position: 'absolute' }}>
                                    <img src={uploadimg} style={{ width: 93.65, height: 93.60, left: 8.92, top: 4.48, position: 'absolute', border: '2px white solid' }} alt="uplaodsvg" />
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="Toggle" style={{ width: 344, height: 40, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex' }}>
                        <div className="Checkbox" style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                            <input
                                type="checkbox"
                                className="CheckboxBase"
                                style={{ height: 20, width: 20 }}
                                value={true}
                                checked={isSale}
                                onChange={handleIsSaleChange}
                            />
                        </div>
                        <div className="Text" style={{ color: '#344054', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', lineHeight: 1.5, wordWrap: 'break-word' }}>Sale</div>
                        <div className="SupportingText" style={{ alignSelf: 'stretch', color: '#667085', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', marginTop: 4, wordWrap: 'break-word' }}>Display sale tag if ON</div>
                    </div>

                    <div className="CategorySection" style={{ width: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex', marginTop: 20 }}>
                        <div className="Label" style={{ color: '#344054', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', lineHeight: 2, wordWrap: 'break-word' }}>Category</div>
                        <table>
                            <tr>
                                <td>
                                    <div className="Checkbox" style={{ justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'inline-flex' }}>
                                        <div className="Checkbox" style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                                            <input
                                                type="checkbox"
                                                className="CheckboxBase"
                                                style={{ height: 20, width: 20 }}
                                                checked={isFeatured}
                                                value={true}
                                                onChange={handleIsFeaturedChange}
                                            />
                                        </div>
                                        <div className="Text" style={{ color: '#344054', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', lineHeight: 2, wordWrap: 'break-word' }}>Featured</div>
                                    </div>
                                </td>
                                <td>
                                    <div className="Checkbox" style={{ justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'inline-flex' }}>
                                        <div className="Checkbox" style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                                            <input
                                                type="checkbox"
                                                className="CheckboxBase"
                                                style={{ height: 20, width: 20 }}
                                                checked={isNewArrival}
                                                onSelect={true}
                                                onChange={handleIsNewArrivalChange}
                                            />
                                        </div>
                                        <div className="Text" style={{ color: '#344054', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', lineHeight: 2, wordWrap: 'break-word' }}>New Arrivals</div>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>

                    <div className="ButtonCard" >
                        <input
                            type="button"
                            value="Save"
                            className="Save"
                            style={{ marginLeft: 60, marginTop: 30, width: 198, height: 56, paddingLeft: 32, paddingRight: 32, paddingTop: 20, paddingBottom: 20, background: '#2B2B2B', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex', color: 'white', fontSize: 14, fontFamily: 'Roboto', fontWeight: '500', wordWrap: 'break-word' }}
                            onClick={handleSave}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Upload;
