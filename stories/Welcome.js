// eslint-disable-next-line no-console
export default {
  name: 'welcome',
  data() {
    return {

    };
  },
  template: `<div class="p_4 p-x_5 font_ui">
	<h1 id="project-origami">Project Origami</h1>
	<h2 id="summary">Summary</h2>
	<p>
		The construction of a boiler plate components project that can be used as a standard for building future products.
	</p>
	<hr />
	<h3 id="intent">Intent</h3>
	<ul class="p-l_5 p-y_2">
		<li>
			Standardizing interaction models of micro transactions
			<ul class="p-l_5 p-y_2">
				<li>removing rework of common DOM</li>
				<li>establishing a model of event interactions</li>
				<li>Improve UX with a global platform to standardize interaction</li>
			</ul>
		</li>
		<li>explore dynamic construction</li>
		<li>potential of remote updating</li>
		<li>focus or rapid to market</li>
		<li>reducing developer need to understand HTML and focus on JavaScript and Data</li>
		<li>establishing a more plug and play model to deal with UI and DOM</li>
	</ul>
	<h3 id="requirements">Requirements</h3>
	<ul class="p-l_5 p-y_2">
		<li>
			Use of <a href="https://vuejs.org/">Vue.js</a>
			<ul class="p-l_5 p-y_2">
				<li>
					Standardize component templates common UI
					<ul class="p-l_5 p-y_2">
						<li>Inputs</li>
						<li>Pagination</li>
						<li>Header</li>
						<li>Footer</li>
						<li>Search</li>
					</ul>
				</li>
			</ul>
		</li>
		<li>
			Encompass Standard functions of Applications
			<ul class="p-l_5 p-y_2">
				<li>Email Reporting</li>
				<li>GA Event Tracking</li>
				<li>Navigation</li>
				<li>
					Boilerplate Pages
					<ul class="p-l_5 p-y_2">
						<li>Login in</li>
						<li>About</li>
						<li>Disclaimer</li>
					</ul>
				</li>
			</ul>
		</li>
		<li>
			All code should be version controlled
			<ul class="p-l_5 p-y_2">
				<li>All common UI should be reusable</li>
				<li>All common Pages should be reusable</li>
			</ul>
		</li>
	</ul>
	<h2 id="project-phases">Project Phases</h2>
	<h3 id="1st-phase-login">1st Phase Login</h3>
	<ol class="p-l_5 p-y_2">
		<li>Create a standard Client Login Page Based off of ACC Connect that brings a user to a Hello World Page.</li>
		<li>Establish Login UX/UI-BP( Best Practices )</li>
		<li>Logged in User Sees Hello World</li>
		<li>
			De-construct UI into reusable components with VUE component structure.
			<ul class="p-l_5 p-y_2">
				<li>Question UI with Text Input</li>
				<li>Switch UI</li>
				<li>Password Input UX/UI-BP</li>
			</ul>
		</li>
		<li>Establish and Check in Library of UI and Login Pages</li>
		<li>QA Login Functions internally.</li>
		<li>Discard and Custom Code</li>
	</ol>
	<h3 id="2nd-phase-cstool">2nd Phase CSTool</h3>
	<ol class="p-l_5 p-y_2">
		<li>Introduce API Ajax Calls Make a standard repeatable function</li>
		<li>Establish Search UX/UI-BP( Best Practices )</li>
		<li>Establish Filter of Lists UX/UI-BP</li>
		<li>Establish Sorting of List UX/UI-BP</li>
		<li>Establish Pagination UX/UI-BP</li>
	</ol>
	<h3 id="3rd-phase-science-and-qualities-greatest-hits">3rd Phase Science and Qualities Greatest Hits</h3>
	<ol class="p-l_5 p-y_2">
		<li>Notification Locking</li>
		<li>
			Boiler Plate Pages
			<ul class="p-l_5 p-y_2">
				<li>Content Holder Pages like About, Credits, Disclaimer, Sponsors, News Updates</li>
			</ul>
		</li>
		<li>Event Tracking</li>
		<li>Page Navigation, Application Switching ( <strong>New Mobile Header Design</strong> )</li>
		<li>Email Reporting</li>
	</ol>
	<h3 id="4th-phase-dynamics-nice-to-have">4th Phase Dynamics (<em>nice to have</em>)</h3>
	<ol class="p-l_5 p-y_2">
		<li>Dynamic Construction of Inputs, Algorithm, Results</li>
		<li>Remote Updating</li>
	</ol>
	<hr />
	<h2 id="potential-products">Potential Products</h2>
	<h3 id="1st-phase-revisited-universal-login">1st Phase Revisited (<em>Universal Login</em>)</h3>
	<ol class="p-l_5 p-y_2">
		<li>Brute Force Lock</li>
		<li>Dues Needed Page</li>
		<li>Registration Flow</li>
		<li>Redirect and Return</li>
		<li>Change Password</li>
		<li>Security Question</li>
		<li>Product Landing Page</li>
		<li>Forgot Password</li>
		<li>Forgot User Name</li>
	</ol>
	<h3 id="assessments-management-qii">Assessments Management QII</h3>
	<ul class="p-l_5 p-y_2">
		<li>Restructuring UI</li>
		<li>Establish better UX</li>
	</ul>
	<h3 id="cstool">CSTool</h3>
  <h3 id="transcript">Transcript</h3>
	<h3 id="future-mobile-application">Future Mobile Application</h3>
</div>
`,

  methods: {
   
  },
};