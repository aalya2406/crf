package net.javaguides.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "crftable")
public class Crf {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long changeRequestId;
	
	public long getChangeRequestId() {
		return changeRequestId;
	}

	public void setChangeRequestId(long changeRequestId) {
		this.changeRequestId = changeRequestId;
	}

	public String getCategoryOfChange() {
		return categoryOfChange;
	}

	public void setCategoryOfChange(String categoryOfChange) {
		this.categoryOfChange = categoryOfChange;
	}

	public String getTypeofChange() {
		return typeofChange;
	}

	public void setTypeofChange(String typeofChange) {
		this.typeofChange = typeofChange;
	}

	public String getProblemStatement() {
		return problemStatement;
	}

	public void setProblemStatement(String problemStatement) {
		this.problemStatement = problemStatement;
	}

	public String getRequesterDetails() {
		return requesterDetails;
	}

	public void setRequesterDetails(String requesterDetails) {
		this.requesterDetails = requesterDetails;
	}

	public String getImplementerDetails() {
		return implementerDetails;
	}

	public void setImplementerDetails(String implementerDetails) {
		this.implementerDetails = implementerDetails;
	}

	public String getDateOfChange() {
		return dateOfChange;
	}

	public void setDateOfChange(String dateOfChange) {
		this.dateOfChange = dateOfChange;
	}

	public String getDescriptionOfProblem() {
		return descriptionOfProblem;
	}

	public void setDescriptionOfProblem(String descriptionOfProblem) {
		this.descriptionOfProblem = descriptionOfProblem;
	}

	public String getSupportingInfoIfAny() {
		return supportingInfoIfAny;
	}

	public void setSupportingInfoIfAny(String supportingInfoIfAny) {
		this.supportingInfoIfAny = supportingInfoIfAny;
	}

	public String getReasonAndJustification() {
		return reasonAndJustification;
	}

	public void setReasonAndJustification(String reasonAndJustification) {
		this.reasonAndJustification = reasonAndJustification;
	}

	public String getAffectedAreas() {
		return affectedAreas;
	}

	public void setAffectedAreas(String affectedAreas) {
		this.affectedAreas = affectedAreas;
	}

	public String getAlternateActionsIfAny() {
		return alternateActionsIfAny;
	}

	public void setAlternateActionsIfAny(String alternateActionsIfAny) {
		this.alternateActionsIfAny = alternateActionsIfAny;
	}

	public String getPriorityToImplement() {
		return priorityToImplement;
	}

	public void setPriorityToImplement(String priorityToImplement) {
		this.priorityToImplement = priorityToImplement;
	}

	public String getChangeImplementationPlan() {
		return changeImplementationPlan;
	}

	public void setChangeImplementationPlan(String changeImplementationPlan) {
		this.changeImplementationPlan = changeImplementationPlan;
	}

	public String getApplicationTesting() {
		return applicationTesting;
	}

	public void setApplicationTesting(String applicationTesting) {
		this.applicationTesting = applicationTesting;
	}

	public String getDateTimeOfImplementation() {
		return dateTimeOfImplementation;
	}

	public void setDateTimeOfImplementation(String dateTimeOfImplementation) {
		this.dateTimeOfImplementation = dateTimeOfImplementation;
	}

	public String getRollbackPlan() {
		return rollbackPlan;
	}

	public void setRollbackPlan(String rollbackPlan) {
		this.rollbackPlan = rollbackPlan;
	}

	public String getApprover1() {
		return approver1;
	}

	public void setApprover1(String approver1) {
		this.approver1 = approver1;
	}

	public String getApprover2() {
		return approver2;
	}

	public void setApprover2(String approver2) {
		this.approver2 = approver2;
	}

	public String getChangeClosureRemarkAndDate() {
		return changeClosureRemarkAndDate;
	}

	public void setChangeClosureRemarkAndDate(String changeClosureRemarkAndDate) {
		this.changeClosureRemarkAndDate = changeClosureRemarkAndDate;
	}

	public String getChangeClosureApprover() {
		return changeClosureApprover;
	}

	public void setChangeClosureApprover(String changeClosureApprover) {
		this.changeClosureApprover = changeClosureApprover;
	}

	@Column(name = "CategoryOfChange")
	private String categoryOfChange;
	
	@Column(name = "TypeofChange")
	private String typeofChange;
	
	@Column(name = "ProblemStatement")
	private String problemStatement;
	
	@Column(name = "RequesterDetails")
	private String  requesterDetails;
	
	@Column(name = "ImplementerDetails")
	private String  implementerDetails;
	
	@Column(name = "DateOfChange")
	private String dateOfChange;
	
	@Column(name = "DescriptionOfProblem")
	private String descriptionOfProblem;
	
	@Column(name = "SupportingInfoIfAny")
	private String supportingInfoIfAny;
	
	@Column(name = "ReasonAndJustification")
	private String reasonAndJustification;
	
	@Column(name = "AffectedAreas")
	private String  affectedAreas;
	
	@Column(name = "AlternateActionsIfAny")
	private String alternateActionsIfAny;
	
	@Column(name = "PriorityToImplement")
	private String priorityToImplement;
	
	@Column(name = "ChangeImplementationPlan")
	private String changeImplementationPlan;
	
	@Column(name = "ApplicationTesting")	
	private String applicationTesting;
	
	@Column(name = "DateTimeOfImplementation")
	private String dateTimeOfImplementation;
	
	@Column(name = "RollbackPlan")
	private String rollbackPlan;
	
	@Column(name = "Approver1")
	private String approver1;
	
	@Column(name = "Approver2")
	private String approver2;
	
	@Column(name = "ChangeClosureRemarkAndDate")
	private String changeClosureRemarkAndDate;
	
	@Column(name = "ChangeClosureApprover")
	private String changeClosureApprover;
}
