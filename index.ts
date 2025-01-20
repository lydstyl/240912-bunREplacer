import { steps } from './regexAndSteps'

let text = `
17/01/25 19:36	UrgentOrder	CYP-408-dataUpdate.ts	50	oui	Terminé(e)	12	32s	
17/01/25 19:36	UrgentOrder	CYP-367-placeOrderWindow.ts	53	oui	Terminé(e)	7	24s	
17/01/25 19:36	Global	CYP-46-commandBarButtons.ts	55	oui	Unfunctional	10	40s	
17/01/25 19:36	UrgentOrder	CYP-349-orderCounterByTab.ts	59	oui	Terminé(e)	11	34s	
17/01/25 19:36	UrgentOrder	CYP-434-conversionUnitOrderDetail.ts	62	oui	Terminé(e)	5	21s	
17/01/25 19:36	FlowPlanning	CYP-375-prodConstraintsUnit.ts	63	oui	WAITING	0	0s	
17/01/25 19:36	OrderPoint	CYP-83-booleanColumnSort.ts	63	oui	Unfunctional	3	12s	
17/01/25 19:36	FlowPlanning	CYP-351-splitOrderButton.ts	63	oui	Terminé(e)	7	25s	
17/01/25 19:36	FlowPlanning	CYP-376-prodConstraintsAlert.ts	67	oui	WAITING	0	1s	
17/01/25 19:36	FlowPlanning	CYP-428-prodRoutesSupplierIncDates.ts	67	oui	WAITING	0	0s	
17/01/25 19:36	UrgentOrder	CYP-477-placeAutoOrder.ts	72	oui	Terminé(e)	11	49s	
17/01/25 19:36	UrgentOrder	CYP-225-orderToValidateGraph.ts	74	oui	Terminé(e)	8	34s	
17/01/25 19:36	FlowPlanning	CYP-382-familyConstraintsQtyUpd.ts	75	oui	Terminé(e)	3	5s	
17/01/25 19:36	UrgentOrder	CYP-222-quantityDetails.ts	75	oui	Terminé(e)	6	28s	
17/01/25 19:36	StockAlerts	CYP-243-columnNameUpdate.ts	77	oui	Terminé(e)	3	6s	
17/01/25 19:36	UrgentOrder	CYP-490-autoOrderOption.ts	77	oui	Terminé(e)	9	34s	
17/01/25 19:36	UrgentOrder	CYP-432-amountUpdate.ts	78	oui	Terminé(e)	2	7s	
17/01/25 19:36	Global	CYP-61-localCriteria.ts	80	oui	Terminé(e)	3	12s	
17/01/25 19:36	Products	CYP-492-tagLeaderReplaced.ts	80	oui	Terminé(e)	2	8s	
17/01/25 19:36	OrderSchedules	CYP-392-referenceDate.ts	83	oui	WAITING	0	0s	
17/01/25 19:36	UrgentOrder	CYP-438-lotInputHelpConversions.ts	83	oui	Terminé(e)	3	13s	
17/01/25 19:36	FlowPlanning	CYP-383-prodConstraintsQtyUpd.ts	84	oui	WAITING	0	-1s	
17/01/25 19:36	StockAlerts	CYP-242-computedColumns.ts	85	oui	Terminé(e)	4	0s	
17/01/25 19:36	UrgentOrder	CYP-365-dateUpd.ts	88	oui	Terminé(e)	4	13s	
17/01/25 19:36	UrgentOrder	CYP-366-splitOrderDateUpd.ts	88	oui	Terminé(e)	4	13s	
17/01/25 19:36	Configuration	CYP-31-decimSeparAndLangage.ts	89	oui	Terminé(e)	4	14s	
17/01/25 19:36	UrgentOrder	CYP-223-productsNumber.ts	89	oui	Terminé(e)	1	3s	
17/01/25 19:36	UrgentOrder	CYP-431-amount.ts	89	oui	Terminé(e)	1	4s	
17/01/25 19:36	UrgentOrder	CYP-440-batchAlert.ts	91	oui	Terminé(e)	1	5s	
17/01/25 19:36	UrgentOrder	CYP-441-incrementAlert.ts	92	oui	Terminé(e)	1	5s	
17/01/25 19:36	UrgentOrder	CYP-358-splitOrderColQtyValUpdateConv.ts	92	oui	Terminé(e)	2	9s	
17/01/25 19:36	Global	CYP-174-saveColumnGridProfile.ts	93	oui	Terminé(e)	1	5s	
17/01/25 19:36	UrgentOrder	CYP-452-conversionsValorizationFilter.ts	93	oui	Terminé(e)	1	4s	
17/01/25 19:36	Global	CYP-66-exportStockPolicy.ts	94	oui	Terminé(e)	1	4s	
17/01/25 19:36	StockAlerts	CYP-409-computedColsIf.ts	94	oui	Terminé(e)	2	2s	
17/01/25 19:36	Optimization	CYP-389-imposedOrder.ts	99	oui	Terminé(e)	1
`

steps.azCypExtractor.forEach((step) => {
  text = text.replace(step.regex, step.replacer)
})
console.log(text)

// bun index.ts
