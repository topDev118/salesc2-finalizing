<h1>Welcome SalesC2</h1>

Welcome to SalesC2, you’ve been invited by {{Auth::user()->name}} to join the team.  
<br>
<a href="{{ url("/team_member/accept/$team->id") }}">Please click this link to complete your registration.</a>
<br>
Happy selling,
<br>
<h2>SalesC2</h2>