/* Canonical plan row mapper. Keep raw D array compact, but let UI and future modules use named fields. */
(function(){
  var FIELDS=['name', 'sponsor', 'city', 'zip', 'assets', 'assetsBOY', 'growthPct', 'participantsEOY', 'planCodes', 'planType', 'isUnion', 'signals', 'score', 'dolFilingLink', 'ein', 'dateFiled', 'address', 'participantsBOY', 'recordkeeper', 'tpa', 'advisorOnFiling', 'allProviders', 'decodedFeatures', 'assetsPerParticipant', 'bundledStatus', 'unused25', 'lateContrib', 'emplrSecurities', 'loans', 'adminFees', 'totalExpenses', 'feePerParticipant', 'totalContributions', 'contribPerParticipant', 'likelyTDF', 'directProviderComp', 'indirectCompFlag', 'indirectCompAmount', 'industryName', 'schedDFlag'];
  var INDEX=Object.create(null);
  for(var i=0;i<FIELDS.length;i++)INDEX[FIELDS[i]]=i;

  function toPlan(row){
    if(!row)return null;
    var plan={_row:row};
    for(var i=0;i<FIELDS.length;i++)plan[FIELDS[i]]=row[i];
    return plan;
  }

  function get(row, field){
    return row && Object.prototype.hasOwnProperty.call(INDEX,field) ? row[INDEX[field]] : undefined;
  }

  function set(row, field, value){
    if(row && Object.prototype.hasOwnProperty.call(INDEX,field)) row[INDEX[field]] = value;
    return row;
  }

  function mapRows(rows){
    return (rows||[]).map(toPlan);
  }

  window.PLAN_FIELDS=FIELDS;
  window.PLAN_INDEX=INDEX;
  window.PlanModel={FIELDS:FIELDS,INDEX:INDEX,toPlan:toPlan,get:get,set:set,mapRows:mapRows,fieldCount:FIELDS.length};
})();
