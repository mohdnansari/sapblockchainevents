const WebSocket = require('ws');

const accessToken = 'eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vc2FwaW5ub3ZhdGlvbi1zdWJhY2NvdW50LmF1dGhlbnRpY2F0aW9uLmV1MTAuaGFuYS5vbmRlbWFuZC5jb20vdG9rZW5fa2V5cyIsImtpZCI6ImtleS1pZC0xIiwidHlwIjoiSldUIn0.eyJqdGkiOiI4Nzk2Yjk5OGJiM2Y0MGMwYTY4NTM2Njc4OGFhNGMzOCIsImV4dF9hdHRyIjp7ImVuaGFuY2VyIjoiWFNVQUEiLCJ6ZG4iOiJzYXBpbm5vdmF0aW9uLXN1YmFjY291bnQiLCJzZXJ2aWNlaW5zdGFuY2VpZCI6IjdjYTc3ZmNlLTkxNDMtNDE0MS05OGM5LWUxMmZmNGFmMzg1MCJ9LCJzdWIiOiJzYi03Y2E3N2ZjZS05MTQzLTQxNDEtOThjOS1lMTJmZjRhZjM4NTAhYjM0NTV8bmEtNDIwYWRmYzktZjk2ZS00MDkwLWE2NTAtMDM4Njk4OGI2N2UwIWIxODM2IiwiYXV0aG9yaXRpZXMiOlsidWFhLnJlc291cmNlIl0sInNjb3BlIjpbInVhYS5yZXNvdXJjZSJdLCJjbGllbnRfaWQiOiJzYi03Y2E3N2ZjZS05MTQzLTQxNDEtOThjOS1lMTJmZjRhZjM4NTAhYjM0NTV8bmEtNDIwYWRmYzktZjk2ZS00MDkwLWE2NTAtMDM4Njk4OGI2N2UwIWIxODM2IiwiY2lkIjoic2ItN2NhNzdmY2UtOTE0My00MTQxLTk4YzktZTEyZmY0YWYzODUwIWIzNDU1fG5hLTQyMGFkZmM5LWY5NmUtNDA5MC1hNjUwLTAzODY5ODhiNjdlMCFiMTgzNiIsImF6cCI6InNiLTdjYTc3ZmNlLTkxNDMtNDE0MS05OGM5LWUxMmZmNGFmMzg1MCFiMzQ1NXxuYS00MjBhZGZjOS1mOTZlLTQwOTAtYTY1MC0wMzg2OTg4YjY3ZTAhYjE4MzYiLCJncmFudF90eXBlIjoiY2xpZW50X2NyZWRlbnRpYWxzIiwicmV2X3NpZyI6IjIwNjI5YWIxIiwiaWF0IjoxNTYwMjYxMzg2LCJleHAiOjE1NjAzMDQ1ODYsImlzcyI6Imh0dHA6Ly9zYXBpbm5vdmF0aW9uLXN1YmFjY291bnQubG9jYWxob3N0OjgwODAvdWFhL29hdXRoL3Rva2VuIiwiemlkIjoiOGZiZDc2Y2EtYzExZS00MzE3LTg2ZGUtZmY5MDlhNmM0NDQ0IiwiYXVkIjpbInNiLTdjYTc3ZmNlLTkxNDMtNDE0MS05OGM5LWUxMmZmNGFmMzg1MCFiMzQ1NXxuYS00MjBhZGZjOS1mOTZlLTQwOTAtYTY1MC0wMzg2OTg4YjY3ZTAhYjE4MzYiLCJ1YWEiXX0.kXrp_-anWhJR_z-n5Au-UsoYYjnWXUWiEbHIUhUUk-1ooElSSh5ZjYAeH6UKMR52sEqyF6gciklp5vCSynUwLWORBpsyR_5VMuqCho6WmaZGP9-2mg4Te6VtFbOddlHG5UFfa9_Sjoh_rAq-JCBLW9fP_8Z85COvNhNLamw--Pa_L_DRSBhNh7k_FtxJXt7_8vrNIzMGf9KouVDRQlqIEmV_VV7Qrc-RxywNaI2dd-M9A2S8tUh90mrJcDkhm0MDchwDeN4m4ewzLdIVq_gbDMYLskbwu4zcybcYvMkfN5svz9RRnb5Eo509DofJ8rXVzqsKPRY40Qn7y267vkV_0XAVWtGygsfIGT-DFmwxqD8Ajphrm2i4aRcqubVufCZhF6wbGXyEOgmlrtq-iSlWNgZbRkUG2CoOWvyXxKx6yjkLQ_XcAxojwgo2lOA_U6TukFUdquoS8XaGOIcmuhwsdwInFb6KtCrfHBX-uG5ec5uFRi2tl4qQBkDYPTQKq0I8cflJV6DDJzrCXXqDfvQM4Fj4Cr4OW7J_LlyeJjH32v69RS8togGdiY75771-2QkPv14_8gsVuTyQCkn1uTP_TydkKIN9vAg68bjDNXJhhvGk81ClhreD3eQyTTactPOByH0h6i3SnGwcsWWHIfRLQJ4bIABZNr2opcwgzaooEjY';

const chaincodeId = '537c574c-851f-41cb-86c2-8318a44077bd-dev-channel-1-hcm'; // chaincode with events

const url = 'wss://hyperledger-fabric.cfapps.eu10.hana.ondemand.com/api/v1/chaincodes/' + chaincodeId + '/events';



const client = new WebSocket(url, {
    headers: {
        Authorization: 'Bearer ' + accessToken,
    }
});

client.on('open', function () {
    console.log('Connection open.');
});

client.on('message', function (data) {
    console.log(data);
});

client.on('close', function (code, reason) {
    console.log("Connection closed.");
    console.log(code, reason);
});