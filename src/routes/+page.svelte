<script lang="ts">
	import { env } from '$env/dynamic/public';

	console.log(env);
	const clientId = env.PUBLIC_GOOGLE_CLIENT_ID;
	const redirectUri = env.PUBLIC_REDIRECT_URI;
	const scope = 'openid email profile';

	const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${encodeURIComponent(clientId)}&redirect_uri=${redirectUri}&scope=${encodeURIComponent(scope)}&access_type=offline`;
</script>

<h1>Google OAuth Example</h1>
<a href={authUrl}>
	<button>Authorize with Google</button>
</a>
