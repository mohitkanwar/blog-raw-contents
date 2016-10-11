Automatic Report Generation From Jira
=====================================
 The Scrum Master for our team had to travel out for a short duration, and I took over the role from him. While looking at the responsibilities I realized that there were many repetitive tasks that were being done by our scrum master manually.

Which included 
	* Finding tickets with latest comments from Product Owner/ Team to keep on getting required answers.
	* Identifying tickets which do not have much movement on Jira.
	* Identifying problems in ticket's progress
	* Generating Status report of all tickets in Jira Board to be shared across the Stake Holders.
	* Generating various graphical reports to be shared across management.

Being a lazy developer by heart, I do not like doing repetitive tasks so I did a bit of research on Jira automation. I found out that Jira now exposes a Rest API using which, above tasks can be easily automated.

The code is committed at [here](https://github.com/mohitkanwar/Jira-Reporting-Tool).

This tool makes use of Jira Rest API. To load initial list of tickets a Jql is executed over Rest API and basic information about tickets is received.  
Unfortunately, the response of this api doesn't contain history (a.k.a changelog) or comments . For retrieving such information about tickets, we need to create a separate REST call for each of the ticket in previous board call.


