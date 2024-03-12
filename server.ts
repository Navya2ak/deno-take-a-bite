
try {
    Deno.serve((_request: Request) => {
        return new Response("Hello, world!");
    });
} catch (error) {
    console.log(error);
    
}
