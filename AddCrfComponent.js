import axios from 'axios';
import React, {useState, useEffect} from 'react'
import {Link, useNavigate, useParams } from 'react-router-dom';
import CrfService from '../services/CrfService'


const AddCrfComponent = () => {

    const [changeRequestId, setChangeRequestId] = useState('')
    const [categoryOfChange, setCategoryOfChange] = useState('')
    const [typeOfChange, setTypeOfChange] = useState('')
    const [problemStatement, setProblemStatement] = useState('')
    const [requesterDetails, setRequesterDetails] = useState('')
    const [implementerDetails, setImplementerDetails] = useState('')
    const [dateOfChange, setDateOfChange] = useState('')
    const [descriptionOfProblem, setDescriptionOfProblem] = useState('')
    const [supportingInfoIfAny, setSupportingInfoIfAny] = useState('')
    const [reasonAndJustification, setReasonAndJustification] = useState('')
    const [affectedAreas, setAffectedAreas] = useState('')
    const [alternateActionsIfAny, setAlternateActionsIfAny] = useState('')
    const [priorityToImplement, setPriorityToImplement] = useState('')
    const [changeImplementationPlan, setChangeImplementationPlan] = useState('')
    const [applicationTesting, setApplicationTesting] = useState('')
    const [dateTimeOfImplementation, setDateTimeOfImplementation] = useState('')
    const [rollbackPlan, setRollbackPlan] = useState('')
    const [approverOne, setApproverOne] = useState('')
    const [approverTwo, setApproverTwo] = useState('')
    const [changeClosureRemarkAndDate, setchangeClosureRemarkAndDate] = useState('')
    const [changeClosureApprover, setchangeClosureApprover] = useState('')
    const navigate = useNavigate();
    const {id} = useParams();
    const [crfs, setcrfs] = useState([])

    const CRF_BASE_REST_API_URL = 'http://localhost:8080/api/crfs';

    const saveOrUpdateCrf = (e) => {
        e.preventDefault();

        const crfs= {changeRequestId, categoryOfChange, typeOfChange, problemStatement, requesterDetails, implementerDetails, dateOfChange, descriptionOfProblem, supportingInfoIfAny, reasonAndJustification, affectedAreas, alternateActionsIfAny, priorityToImplement, changeImplementationPlan, applicationTesting, dateTimeOfImplementation, rollbackPlan, approverOne, approverTwo, changeClosureRemarkAndDate, changeClosureApprover}

        if(id){
            CrfService.updateCrf(changeRequestId, crfs) .then((response)=>{
                if (response.status === 200){
                    setcrfs(response.data)
                }
                console.log(response.data);
            })
            .catch((error)=>{
    console.log(error);
            })
        }
        else{
            CrfService.createCrf(crfs) .then((response)=>{
                if (response.status === 200){
                    setcrfs(response.data)
                }
                console.log(response.data);
            })
            .catch((error)=>{
    console.log(error);
    }
            )
        }
    }

    useEffect(() => {
        CrfService.getCrfById(id).then((response) =>{
            setChangeRequestId(response.data.changeRequestId)
            setCategoryOfChange(response.data.categoryOfChange)
            setTypeOfChange(response.data.typeOfChange)
            setProblemStatement(response.data.problemStatement)
            setRequesterDetails(response.data.requesterDetails)
            setImplementerDetails(response.data.implementerDetails)
            setDateOfChange(response.data.dateOfChange)
            setDescriptionOfProblem(response.data.descriptionOfProblem)
            setSupportingInfoIfAny(response.data.supportingInfoIfAny)
            setReasonAndJustification(response.data.reasonAndJustification)
            setAffectedAreas(response.data.affectedAreas)
            setAlternateActionsIfAny(response.data.alternateActionsIfAny)
            setPriorityToImplement(response.data.priorityToImplement)
            setChangeImplementationPlan(response.data.changeImplementationPlan)
            setApplicationTesting(response.data.applicationTesting)
            setDateTimeOfImplementation(response.data.dateTimeOfApplication)
            setRollbackPlan(response.data.rollbackPlan)
            setApproverOne(response.data.approverOne)
            setApproverTwo(response.data.approverTwo)
            setchangeClosureRemarkAndDate(response.data.changeClosureRemarkAndDate)
            setchangeClosureApprover(response.data.changeClosureApprover)
        }).catch(error =>{
            console.log(error)
        })
    }
    ,[])

    const title = () =>{

        if(id){
            return <h2 className = "text-center"> Update Crf</h2>
        }else {
            return <h2 className = "text-center">Add Crf</h2>
        }
    }
    return(
        <div>
           <br></br>
            <div className = "container">
                <div className = "row"></div>
                <div className = "card col-md-6 offset-md-3 offset-md-3">
                    {
                    title()
                    }
                </div>
               
                <div className = "card-body">
                    <form>
                        {/* <div className = "form-group mb-2">
                            <label className = "form-label"> Change Request Id</label>
                            <input
                                type = "text"
                                placeholder = "Enter Change Request Id "
                                name = "changeRequestId"
                                className = "form-control"
                                value = {changeRequestId}
                                onChange = {(e) => setChangeRequestId(e.target.value)}
                                >

                                </input>
                        </div> */}

                        <div className = "form-group mb-2">
                            <label className = "form-label"> Category of Change</label>
                            <input
                                type = "text"
                                placeholder = "Network / Infra/ Application "
                                name = "categoryOfChange"
                                className = "form-control"
                                value = {categoryOfChange}
                                onChange = {(e) => setCategoryOfChange(e.target.value)}
                                >

                                </input>
                        </div>

                        <div className = "form-group mb-2">
                            <label className = "form-label"> Type of Change</label>
                            <input
                                type = "text"
                                placeholder = "Standard/ Non-Standard/ Emergency"
                                name = "typeOfChange"
                                className = "form-control"
                                value = {typeOfChange}
                                onChange = {(e) => setTypeOfChange(e.target.value)}
                                >

                                </input>
                        </div>

                        <div className = "form-group mb-2">
                            <label className = "form-label"> Problem Statement</label>
                            <input
                                type = "text"
                                placeholder = "One line Problem Statement "
                                name = "problemStatement"
                                className = "form-control"
                                value = {problemStatement}
                                onChange = {(e) => setProblemStatement(e.target.value)}
                                >

                                </input>
                        </div>

                        <div className = "form-group mb-2">
                            <label className = "form-label"> Requester Details</label>
                            <input
                                type = "text"
                                placeholder = "Your name "
                                name = "requesterDetails"
                                className = "form-control"
                                value = {requesterDetails}
                                onChange = {(e) => setRequesterDetails(e.target.value)}
                                >

                                </input>
                        </div>

                        <div className = "form-group mb-2">
                            <label className = "form-label"> Implementer Details</label>
                            <input
                                type = "text"
                                placeholder = " Abhishek Jain "
                                name = "implementerDetails"
                                className = "form-control"
                                value = {implementerDetails}
                                onChange = {(e) => setImplementerDetails(e.target.value)}
                                >

                                </input>
                        </div>

                        <div className = "form-group mb-2">
                            <label className = "form-label"> Date of Change</label>
                            <input
                                type = "text"
                                placeholder = "Date of when changes need to be implemented on"
                                name = "dateOfChange"
                                className = "form-control"
                                value = {dateOfChange}
                                onChange = {(e) => setDateOfChange(e.target.value)}
                                >

                                </input>
                        </div>

                        <div className = "form-group mb-2">
                            <label className = "form-label"> Description of Problem</label>
                            <input
                                type = "text"
                                placeholder = "complete requirement"
                                name = "descriptionOfProblem"
                                className = "form-control"
                                value = {descriptionOfProblem}
                                onChange = {(e) => setDescriptionOfProblem(e.target.value)}
                                >

                                </input>
                        </div>

                        <div className = "form-group mb-2">
                            <label className = "form-label"> Supporting Information If Any</label>
                            <input
                                type = "text"
                                placeholder = "N/A"
                                name = "supportingInfoIfAny"
                                className = "form-control"
                                value = {supportingInfoIfAny}
                                onChange = {(e) => setSupportingInfoIfAny(e.target.value)}
                                >

                                </input>
                        </div>
                        
                        <div className = "form-group mb-2">
                            <label className = "form-label"> Reason And Justification</label>
                            <input
                                type = "text"
                                placeholder = "Why are we implementing this - in one line"
                                name = "reasonAndJustification"
                                className = "form-control"
                                value = {reasonAndJustification}
                                onChange = {(e) => setReasonAndJustification(e.target.value)}
                                >

                                </input>
                        </div>

                        <div className = "form-group mb-2">
                            <label className = "form-label"> Affected Areas</label>
                            <input
                                type = "text"
                                placeholder = "Network Security Group – UAT-Money-App-VM2,(And Whichever VM is affected)"
                                name = "affectedAreas"
                                className = "form-control"
                                value = {affectedAreas}
                                onChange = {(e) => setAffectedAreas(e.target.value)}
                                >

                                </input>
                        </div>

                        <div className = "form-group mb-2">
                            <label className = "form-label"> Alternate Actions if any</label>
                            <input
                                type = "text"
                                placeholder = "N/A"
                                name = "alternateActionsIfAny"
                                className = "form-control"
                                value = {alternateActionsIfAny}
                                onChange = {(e) => setAlternateActionsIfAny(e.target.value)}
                                >

                                </input>
                        </div>

                        <div className = "form-group mb-2">
                            <label className = "form-label"> Priority to Implement</label>
                            <input
                                type = "text"
                                placeholder = "high"
                                name = "priorityToImplement"
                                className = "form-control"
                                value = {priorityToImplement}
                                onChange = {(e) => setPriorityToImplement(e.target.value)}
                                >

                                </input>
                        </div>

                        <div className = "form-group mb-2">
                            <label className = "form-label"> Change Implementation Plan/details</label>
                            <input
                                type = "text"
                                placeholder = "Complete Requirement"
                                name = "changeImplementationPlan"
                                className = "form-control"
                                value = {changeImplementationPlan}
                                onChange = {(e) => setChangeImplementationPlan(e.target.value)}
                                >

                                </input>
                        </div>

                        <div className = "form-group mb-2">
                            <label className = "form-label"> Application Testing</label>
                            <input
                                type = "text"
                                placeholder = "N/A"
                                name = "applicationTesting"
                                className = "form-control"
                                value = {applicationTesting}
                                onChange = {(e) => setApplicationTesting(e.target.value)}
                                >

                                </input>
                        </div>

                        <div className = "form-group mb-2">
                            <label className = "form-label"> Date /Time of Implementation</label>
                            <input
                                type = "text"
                                placeholder = "Date of Implementation"
                                name = "dateTimeOfImplementation"
                                className = "form-control"
                                value = {dateTimeOfImplementation}
                                onChange = {(e) => setDateTimeOfImplementation(e.target.value)}
                                >

                                </input>
                        </div>

                        <div className = "form-group mb-2">
                            <label className = "form-label"> Rollback Plan</label>
                            <input
                                type = "text"
                                placeholder = "N/A"
                                name = "rollbackPlan"
                                className = "form-control"
                                value = {rollbackPlan}
                                onChange = {(e) => setRollbackPlan(e.target.value)}
                                >

                                </input>
                        </div>

                        <div className = "form-group mb-2">
                            <label className = "form-label"> Approver 1</label>
                            <input
                                type = "text"
                                placeholder = "Avdhoot Bhogulkar"
                                name = "approverOne"
                                className = "form-control"
                                value = {approverOne}
                                onChange = {(e) => setApproverOne(e.target.value)}
                                >

                                </input>
                        </div>
                       
                        <div className = "form-group mb-2">
                            <label className = "form-label"> Approver 2</label>
                            <input
                                type = "text"
                                placeholder = "Mukesh Ranjan"
                                name = "approverTwo"
                                className = "form-control"
                                value = {approverTwo}
                                onChange = {(e) => setApproverTwo(e.target.value)}
                                >

                                </input>
                        </div>

                        <div className = "form-group mb-2">
                            <label className = "form-label"> Change Closure Remark And Date</label>
                            <input
                                type = "text"
                                placeholder = "Closure to be mentioned after checking all the requirement being satisfied"
                                name = "changeClosureRemarkAndDate"
                                className = "form-control"
                                value = {changeClosureRemarkAndDate}
                                onChange = {(e) => setchangeClosureRemarkAndDate(e.target.value)}
                                >

                                </input>
                        </div>

                        <div className = "form-group mb-2">
                            <label className = "form-label"> Change Closure Approver</label>
                            <input
                                type = "text"
                                placeholder = "Mukesh Ranjan"
                                name = "changeClosureApprover"
                                className = "form-control"
                                value = {changeClosureApprover}
                                onChange = {(e) => setchangeClosureApprover(e.target.value)}
                                >

                                </input>
                        </div>
                       

                        <button className = "btn btn-success" onClick = {(e) => saveOrUpdateCrf(e)} > Submit</button>
                        <Link to="/crfs" className="btn btn-danger"> Cancel </Link> 
                    </form>
                </div>
            </div>

        </div>
    )
}

export default AddCrfComponent