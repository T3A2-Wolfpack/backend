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
        const res = await request(app).get("/api/whiskeys/62d54c1e26f92dcab2e71fa3");
        expect(res.status).toBe(200)
        expect(res.body._id).toBeDefined()
    })

  // test("Creating a new whiskey", async () => {
  //     const res = await request(app).post('/api/whiskeys').send({
  //         name: "Johnnie Blue",
  //         description: "Test description",
  //         age: 28,
  //         region: "Scotland",
  //         type: "Blended",
  //         price: "High",
  //         image: "test image request"
  //     })
  //     expect(res.status).toBe(201)
  //     expect(res.headers["content-type"]).toMatch(/json/i)
  //     expect(res.body._id).toBeDefined()
  //     expect(res.body.name).toBe("Johnnie Blue")
  // })

  ///////////////////////////////////////////////////////////////////////////////

  //   beforeAll(async () => {
  //     const testWhiskey = {
  //       name: "Testy",
  //       description: "Test description",
  //       age: 28,
  //       region: "Scotland",
  //       type: "Blended",
  //       price: "High",
  //       image: "test image request",
  //     };
  //     await request(app).post("/api/whiskeys").send(testWhiskey);
  //   });

    test("Updating a whiskey", async () => {
      const res = await request(app).patch('/api/whiskeys/62d54c1e26f92dcab2e71fa3')
        .send({
          name: "Johnnie Blue",
        });
        expect(res.body.name).toBe("Johnnie Blue");
    });

});

describe("Tastings tests", () => {
  test("GET /api/whiskeys/62d54c1e26f92dcab2e71fa3/tastings to return tasting for that whiskey", async () => {
    const res = await request(app).get(
      "/api/whiskeys/62d54c1e26f92dcab2e71fa3/tastings"
    );
      expect(res.status).toBe(200);
      expect(res.body).toBeInstanceOf(Object);
    expect(res.headers["content-type"]).toMatch(/json/i);
  });
    
    test("GET a single tasting for a whiskey", () => {
        async () => {
          const res = await request(app).get("/api/whiskeys/62d54c1e26f92dcab2e71fa3/tastings62d812022ecf263322a0bd0a")
            expect(res.status).toBe(200)
            expect(res.body._id).toBeDefined()
            expect(res.body.visual.rating).toBe(Number)
      }
    })
    
    test("Create a new tasting for a whiskey", () => {
        async () => {
            const res = await request(app).post("/api/whiskeys/62d54c1e26f92dcab2e71fa3").send({
                visual: {
                    comment: "good",
                    rating: 4
                },
                nose: {
                    comment: "great",
                    rating: 4
                },
                palate: {
                    comment: "superb",
                    rating: 4
                },
                finish: {
                    comment: "Extra",
                    rating: 5
                },
                finalRating: 5,
                finalComment: "Excellento"
            })
            expect(res.status).toBe(200)
            expect(res._id).toBeDefined()
            
        }
    })
})