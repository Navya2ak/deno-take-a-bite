
try {
    Deno.serve((_request: Request) => {
        return new Response("Hello, world!111111111111");
    });
} catch (error) {
    console.log(error);
    
}
