import Layout from "../../components/Layout";
import {useState} from "react";
import axios from "axios";


const DEFAULT_DATA = {
    title: "",
    description: "",
    link: "",
    priority: "2",
    timeToFinish: 60
}

const ResourceCreate = () => {
    const [form, setForm] = useState(DEFAULT_DATA)

    const submitForm = () => {
        axios.post("/api/resources", form)
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setForm({
            ...form,
            [name]: value
        })
    }

    const resetForm = () => {
      setForm(DEFAULT_DATA)
    }

    return (
        <Layout>
            <div className="container">
                <div className="columns">
                    <div className="column is-8 is-offset-2">
                        <div className="resource-form">
                            <h1 className="title">Add New Resource</h1>
                            <form action="">
                                <div className="field">
                                    <label className="label">Title</label>
                                    <div className="control">
                                        <input className="input" onChange={handleChange} name="title" value={form.title} type="text" placeholder="Learn Next JS and Sanity IO"/>
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Description</label>
                                    <div className="control">
                                        <textarea className="textarea" onChange={handleChange} name="description" value={form.description} placeholder="Learn these technologies because they are very popular and enable better SEO"></textarea>
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Link</label>
                                    <div className="control">
                                        <input className="input" onChange={handleChange} name="link" value={form.link} type="text" placeholder="https://aburasoba.org"/>
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Priority</label>
                                    <div className="control">
                                        <div className="select">
                                            <select value={form.priority} name="priority" onChange={handleChange}>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Time to finish</label>
                                    <div className="control">
                                        <input className="input" value={form.timeToFinish} name="timeToFinish" onChange={handleChange} type="number" placeholder="60 (time is minutes)"/>
                                    </div>
                                    <p className="help">Time is in minutes</p>
                                </div>
                                <div className="field is-grouped">
                                    <div className="control">
                                        <button className="button is-link" type="button" onClick={submitForm}>Submit</button>
                                    </div>
                                    <div className="control">
                                        <button className="button is-link is-light" onClick={resetForm}>Reset Form</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ResourceCreate