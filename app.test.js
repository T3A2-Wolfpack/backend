const app = require("./app");
const request = require("supertest");

describe("Whiskey tests", () => {
  test("GET all whiskeys", async () => {
    const res = await request(app).get("/api/whiskeys");
    expect(res.status).toBe(200);
    expect(res.headers["content-type"]).toMatch(/json/i);
    expect(res.body).toBeInstanceOf(Array);
  });
    
    test("Get a single whiskey", async () => {
        const res = await request(app).get(
          "/api/whiskeys/62d9306b36b4e79648c0938a"
        );
        expect(res.status).toBe(200)
        expect(res.body._id).toBeDefined()
    })

  test("Creating a new whiskey", async () => {
      const res = await request(app).post('/api/whiskeys').send({
          name: "Johnnie Blue",
          description: "Test description",
          age: 28,
          region: "Scotland",
          type: "Blended",
          price: "High",
          image: "test image request"
      })
      expect(res.status).toBe(200)
      expect(res.headers["content-type"]).toMatch(/json/i)
      expect(res.body._id).toBeDefined()
      expect(res.body.name).toBe("Johnnie Blue")
  })

  ///////////////////////////////////////////////////////////////////////////////



    test("Updating a whiskey", async () => {
      const res = await request(app)
        .patch("/api/whiskeys/62d9306b36b4e79648c0938a")
        .send({
          name: "Suntory Toki",
        });
        expect(res.body.name).toBe("Suntory Toki");
    });

});

describe("Tastings tests", () => {
  test("GET tasting to return tasting for that whiskey", async () => {
    const res = await request(app).get(
      "/api/whiskeys/62d9306b36b4e79648c0938a/tastings"
    );
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Object);
    expect(res.headers["content-type"]).toMatch(/json/i);
  });
    
    test("GET a single tasting for a whiskey", () => {
        async () => {
          const res = await request(app).get(
            "/api/whiskeys/62d9306b36b4e79648c0938a/tastings/62d9ad9591a91af549334f00"
          );
            expect(res.status).toBe(200)
            expect(res.body._id).toBeDefined()
            expect(res.body.visual.rating).toBe(Number)
      }
    })
    
    test("Create a new tasting for a whiskey", () => {
        async () => {
            const res = await request(app)
              .post("/api/whiskeys/62d9306b36b4e79648c0938a")
              .send({
                visual: {
                  comment: "good",
                  rating: 4,
                },
                nose: {
                  comment: "great",
                  rating: 4,
                },
                palate: {
                  comment: "superb",
                  rating: 4,
                },
                finish: {
                  comment: "Extra",
                  rating: 5,
                },
                finalRating: 5,
                finalComment: "Excellento",
              });
            expect(res.status).toBe(200)
            expect(res._id).toBeDefined()
            
        }
    })
})