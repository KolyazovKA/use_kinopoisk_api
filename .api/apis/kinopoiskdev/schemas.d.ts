declare const ImageControllerFindManyV14: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly page: {
                    readonly minimum: 1;
                    readonly default: 1;
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Номер страницы";
                };
                readonly limit: {
                    readonly minimum: 1;
                    readonly maximum: 250;
                    readonly default: 10;
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Количество элементов на странице";
                };
                readonly selectFields: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly enum: readonly ["movieId", "type", "language", "url", "previewUrl", "height", "width", "updatedAt", "createdAt"];
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Список полей требуемых в ответе из модели";
                };
                readonly notNullFields: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly enum: readonly ["movieId", "type", "language", "url", "previewUrl", "height", "width", "updatedAt", "createdAt"];
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Список полей которые не должны быть null или пусты";
                };
                readonly sortField: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly enum: readonly ["movieId", "type", "language", "url", "previewUrl", "height", "width", "updatedAt", "createdAt"];
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Сортировка по полям из модели";
                };
                readonly sortType: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Тип сортировки применительно к полям из sortField (пример: `\"1\", \"-1\"`)";
                };
                readonly movieId: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск картинок по id фильма (пример: `\"666\", \"!666\"`)";
                };
                readonly type: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly enum: readonly ["backdrops", "cover", "frame", "promo", "screenshot", "shooting", "still", "wallpaper"];
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск картинок по типу (пример: `\"cover\", \"!cover\"`)";
                };
                readonly language: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly enum: readonly ["ab", "af", "am", "ar", "as", "av", "ba", "be", "bg", "bn", "ca", "ce", "cn", "cs", "cu", "cv", "da", "de"];
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск картинок по языку (пример: `\"en\", \"!de\"`)";
                };
                readonly height: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск картинок по высоте (пример: `\"1920\", \"360-1920\"`)";
                };
                readonly width: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск картинок по ширине (пример: `\"1080\", \"320-1080\"`)";
                };
                readonly updatedAt: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по дате обновления в базе (пример: `01.01.2020, 01.01.2020-31.12.2020`)";
                };
                readonly createdAt: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по дате добавления в базу (пример: `01.01.2020, 01.01.2020-31.12.2020`)";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly docs: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly movieId: {
                                readonly type: "number";
                            };
                            readonly type: {
                                readonly type: "string";
                            };
                            readonly language: {
                                readonly type: "string";
                            };
                            readonly url: {
                                readonly type: "string";
                            };
                            readonly previewUrl: {
                                readonly type: "string";
                            };
                            readonly height: {
                                readonly type: "number";
                            };
                            readonly width: {
                                readonly type: "number";
                            };
                            readonly updatedAt: {
                                readonly format: "date-time";
                                readonly type: "string";
                            };
                            readonly createdAt: {
                                readonly format: "date-time";
                                readonly type: "string";
                            };
                        };
                        readonly required: readonly ["movieId", "updatedAt", "createdAt"];
                    };
                };
                readonly total: {
                    readonly type: "number";
                    readonly description: "Общее количество результатов";
                };
                readonly limit: {
                    readonly type: "number";
                    readonly description: "Количество результатов на странице";
                };
                readonly page: {
                    readonly type: "number";
                    readonly description: "Текущая страница";
                };
                readonly pages: {
                    readonly type: "number";
                    readonly description: "Сколько страниц всего";
                };
            };
            readonly required: readonly ["docs", "total", "limit", "page", "pages"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const KeywordControllerFindManyV14: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly page: {
                    readonly minimum: 1;
                    readonly default: 1;
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Номер страницы";
                };
                readonly limit: {
                    readonly minimum: 1;
                    readonly maximum: 250;
                    readonly default: 10;
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Количество элементов на странице";
                };
                readonly selectFields: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly enum: readonly ["id", "movies", "title", "updatedAt", "createdAt"];
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Список полей требуемых в ответе из модели";
                };
                readonly notNullFields: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly enum: readonly ["id", "movies.id", "title", "updatedAt", "createdAt"];
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Список полей которые не должны быть null или пусты";
                };
                readonly sortField: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly enum: readonly ["id", "movies.id", "title", "updatedAt", "createdAt"];
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Сортировка по полям из модели";
                };
                readonly sortType: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Тип сортировки применительно к полям из sortField (пример: `\"1\", \"-1\"`)";
                };
                readonly id: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск ключевого слова по id (пример: `\"666\", \"!666\"`)";
                };
                readonly "movies.id": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск ключевых слов по id фильма (пример: `\"666\", \"!666\"`)";
                };
                readonly title: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск ключевых слов по наименованию (пример: `\"1980-е\", \"!1980-е\"`)";
                };
                readonly updatedAt: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по дате обновления в базе (пример: `01.01.2020, 01.01.2020-31.12.2020`)";
                };
                readonly createdAt: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по дате добавления в базу (пример: `01.01.2020, 01.01.2020-31.12.2020`)";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly docs: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "number";
                            };
                            readonly title: {
                                readonly type: "string";
                            };
                            readonly movies: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly id: {
                                        readonly type: "number";
                                    };
                                };
                            };
                            readonly updatedAt: {
                                readonly format: "date-time";
                                readonly type: "string";
                            };
                            readonly createdAt: {
                                readonly format: "date-time";
                                readonly type: "string";
                            };
                        };
                        readonly required: readonly ["id", "title", "updatedAt", "createdAt"];
                    };
                };
                readonly total: {
                    readonly type: "number";
                    readonly description: "Общее количество результатов";
                };
                readonly limit: {
                    readonly type: "number";
                    readonly description: "Количество результатов на странице";
                };
                readonly page: {
                    readonly type: "number";
                    readonly description: "Текущая страница";
                };
                readonly pages: {
                    readonly type: "number";
                    readonly description: "Сколько страниц всего";
                };
            };
            readonly required: readonly ["docs", "total", "limit", "page", "pages"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ListControllerFindManyV14: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly page: {
                    readonly minimum: 1;
                    readonly default: 1;
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Номер страницы";
                };
                readonly limit: {
                    readonly minimum: 1;
                    readonly maximum: 250;
                    readonly default: 10;
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Количество элементов на странице";
                };
                readonly selectFields: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly enum: readonly ["name", "category", "slug", "moviesCount", "cover", "updatedAt", "createdAt"];
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Список полей требуемых в ответе из модели";
                };
                readonly notNullFields: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly enum: readonly ["name", "category", "slug", "moviesCount", "cover.url", "cover.previewUrl", "updatedAt", "createdAt"];
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Список полей которые не должны быть null или пусты";
                };
                readonly sortField: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly enum: readonly ["name", "category", "slug", "moviesCount", "cover.url", "cover.previewUrl", "updatedAt", "createdAt"];
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Сортировка по полям из модели";
                };
                readonly sortType: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Тип сортировки применительно к полям из sortField (пример: `\"1\", \"-1\"`)";
                };
                readonly slug: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск slug (пример: `\"!top250\", \"top250\"`)";
                };
                readonly category: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly enum: readonly ["Онлайн-кинотеатр", "Премии", "Сборы", "Сериалы", "Фильмы"];
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по категории (пример: `\"Фильмы\", \"!Фильмы\"`)";
                };
                readonly moviesCount: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по количеству фильмов (пример: `\"1-200\", \"10\"`)";
                };
                readonly updatedAt: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по дате обновления в базе (пример: `01.01.2020, 01.01.2020-31.12.2020`)";
                };
                readonly createdAt: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по дате добавления в базу (пример: `01.01.2020, 01.01.2020-31.12.2020`)";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly docs: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly category: {
                                readonly type: "string";
                            };
                            readonly slug: {
                                readonly type: "string";
                            };
                            readonly moviesCount: {
                                readonly type: "number";
                            };
                            readonly cover: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly url: {
                                        readonly type: "string";
                                        readonly description: "Чтобы найти фильмы с этим полем, используйте: `!null`";
                                    };
                                    readonly previewUrl: {
                                        readonly type: "string";
                                        readonly description: "Чтобы найти фильмы с этим полем, используйте: `!null`";
                                    };
                                };
                            };
                            readonly name: {
                                readonly type: "string";
                            };
                            readonly updatedAt: {
                                readonly format: "date-time";
                                readonly type: "string";
                            };
                            readonly createdAt: {
                                readonly format: "date-time";
                                readonly type: "string";
                            };
                        };
                        readonly required: readonly ["category", "slug", "moviesCount", "cover", "name", "updatedAt", "createdAt"];
                    };
                };
                readonly total: {
                    readonly type: "number";
                    readonly description: "Общее количество результатов";
                };
                readonly limit: {
                    readonly type: "number";
                    readonly description: "Количество результатов на странице";
                };
                readonly page: {
                    readonly type: "number";
                    readonly description: "Текущая страница";
                };
                readonly pages: {
                    readonly type: "number";
                    readonly description: "Сколько страниц всего";
                };
            };
            readonly required: readonly ["docs", "total", "limit", "page", "pages"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ListControllerFindOneV14: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly slug: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["slug"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly category: {
                    readonly type: "string";
                };
                readonly slug: {
                    readonly type: "string";
                };
                readonly moviesCount: {
                    readonly type: "number";
                };
                readonly cover: {
                    readonly type: "object";
                    readonly properties: {
                        readonly url: {
                            readonly type: "string";
                            readonly description: "Чтобы найти фильмы с этим полем, используйте: `!null`";
                        };
                        readonly previewUrl: {
                            readonly type: "string";
                            readonly description: "Чтобы найти фильмы с этим полем, используйте: `!null`";
                        };
                    };
                };
                readonly name: {
                    readonly type: "string";
                };
                readonly updatedAt: {
                    readonly format: "date-time";
                    readonly type: "string";
                };
                readonly createdAt: {
                    readonly format: "date-time";
                    readonly type: "string";
                };
            };
            readonly required: readonly ["category", "slug", "moviesCount", "cover", "name", "updatedAt", "createdAt"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const MovieControllerFindManyAwardsV14: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly page: {
                    readonly minimum: 1;
                    readonly default: 1;
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Номер страницы";
                };
                readonly limit: {
                    readonly minimum: 1;
                    readonly maximum: 250;
                    readonly default: 10;
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Количество элементов на странице";
                };
                readonly selectFields: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly enum: readonly ["movieId", "winning", "nomination", "updatedAt", "createdAt"];
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Список полей требуемых в ответе из модели";
                };
                readonly notNullFields: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly enum: readonly ["movieId", "winning", "nomination.award.title", "nomination.award.year", "nomination.title", "updatedAt", "createdAt"];
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Список полей которые не должны быть null или пусты";
                };
                readonly sortField: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly enum: readonly ["movieId", "winning", "nomination.award.title", "nomination.award.year", "nomination.title", "updatedAt", "createdAt"];
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Сортировка по полям из модели";
                };
                readonly sortType: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Тип сортировки применительно к полям из sortField (пример: `\"1\", \"-1\"`)";
                };
                readonly movieId: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по ID фильма (пример: `\"666\", \"555\", \"!666\"`)";
                };
                readonly "nomination.title": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по номинациям (пример: `\"Оскар\", \"Золотой глобус\"`)";
                };
                readonly "nomination.award.title": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по наградам (пример: `\"Лучший фильм\", \"Лучший актер\"`)";
                };
                readonly "nomination.award.year": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по году награды (пример: `\"2019\", \"2020\"`)";
                };
                readonly winning: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по победам (пример: `\"true\", \"false\"`)";
                };
                readonly updatedAt: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по дате обновления в базе (пример: `01.01.2020, 01.01.2020-31.12.2020`)";
                };
                readonly createdAt: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по дате добавления в базу (пример: `01.01.2020, 01.01.2020-31.12.2020`)";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly docs: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly nomination: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly award: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly title: {
                                                readonly type: "string";
                                            };
                                            readonly year: {
                                                readonly type: "number";
                                            };
                                        };
                                        readonly required: readonly ["title", "year"];
                                    };
                                    readonly title: {
                                        readonly type: "string";
                                    };
                                };
                                readonly required: readonly ["award", "title"];
                            };
                            readonly winning: {
                                readonly type: "boolean";
                            };
                            readonly updatedAt: {
                                readonly format: "date-time";
                                readonly type: "string";
                            };
                            readonly createdAt: {
                                readonly format: "date-time";
                                readonly type: "string";
                            };
                            readonly movieId: {
                                readonly type: "number";
                            };
                        };
                    };
                };
                readonly total: {
                    readonly type: "number";
                    readonly description: "Общее количество результатов";
                };
                readonly limit: {
                    readonly type: "number";
                    readonly description: "Количество результатов на странице";
                };
                readonly page: {
                    readonly type: "number";
                    readonly description: "Текущая страница";
                };
                readonly pages: {
                    readonly type: "number";
                    readonly description: "Сколько страниц всего";
                };
            };
            readonly required: readonly ["docs", "total", "limit", "page", "pages"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const MovieControllerFindManyByQueryV14: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly page: {
                    readonly minimum: 1;
                    readonly default: 1;
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Номер страницы";
                };
                readonly limit: {
                    readonly minimum: 1;
                    readonly maximum: 250;
                    readonly default: 10;
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Количество элементов на странице";
                };
                readonly selectFields: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly enum: readonly ["id", "externalId", "name", "enName", "alternativeName", "names", "description", "shortDescription", "slogan", "type", "typeNumber", "isSeries", "status", "year", "releaseYears", "rating", "ratingMpaa", "ageRating", "votes", "seasonsInfo", "budget", "audience", "movieLength", "seriesLength", "totalSeriesLength", "genres", "countries", "poster", "backdrop", "logo", "ticketsOnSale", "videos", "networks", "persons", "facts", "fees", "premiere", "similarMovies", "sequelsAndPrequels", "watchability", "lists", "top10", "top250", "updatedAt", "createdAt"];
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Список полей требуемых в ответе из модели";
                };
                readonly notNullFields: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly enum: readonly ["id", "externalId.imdb", "externalId.tmdb", "externalId.kpHD", "name", "enName", "alternativeName", "names.name", "description", "shortDescription", "slogan", "type", "typeNumber", "isSeries", "status", "year", "releaseYears.start", "releaseYears.end", "rating.kp", "rating.imdb", "rating.tmdb", "rating.filmCritics", "rating.russianFilmCritics", "rating.await", "ratingMpaa", "ageRating", "votes.kp", "votes.imdb", "votes.tmdb", "votes.filmCritics", "votes.russianFilmCritics", "votes.await", "budget.value", "budget.currency", "audience.count", "audience.country", "movieLength", "seriesLength", "totalSeriesLength", "genres.name", "countries.name", "poster.url", "backdrop.url", "logo.url", "ticketsOnSale", "videos.trailers.url", "videos.trailers.site", "videos.trailers.name", "networks.items.name", "networks.items.logo.url", "persons.id", "persons.name", "persons.enName", "persons.photo", "persons.description", "persons.profession", "persons.enProfession", "facts.type", "facts.value", "facts.spoiler", "fees.world.value", "fees.usa.value", "fees.russia.value", "premiere.world", "premiere.usa", "premiere.russia", "premiere.digital", "premiere.dvd", "premiere.bluRay", "premiere.cinema", "premiere.country", "similarMovies.id", "similarMovies.name", "similarMovies.enName", "similarMovies.alternativeName", "similarMovies.poster.url", "similarMovies.rating.kp", "similarMovies.rating.imdb", "similarMovies.rating.tmdb", "similarMovies.year", "sequelsAndPrequels.id", "sequelsAndPrequels.name", "sequelsAndPrequels.enName", "sequelsAndPrequels.alternativeName", "sequelsAndPrequels.poster.url", "sequelsAndPrequels.rating.kp", "sequelsAndPrequels.rating.imdb", "sequelsAndPrequels.rating.tmdb", "sequelsAndPrequels.year", "watchability.items.name", "watchability.items.url", "watchability.items.logo.url", "lists", "top10", "top250", "updatedAt", "createdAt"];
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Список полей которые не должны быть null или пусты";
                };
                readonly sortField: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly enum: readonly ["id", "externalId.imdb", "externalId.tmdb", "externalId.kpHD", "name", "enName", "alternativeName", "names.name", "description", "shortDescription", "slogan", "type", "typeNumber", "isSeries", "status", "year", "releaseYears.start", "releaseYears.end", "rating.kp", "rating.imdb", "rating.tmdb", "rating.filmCritics", "rating.russianFilmCritics", "rating.await", "ratingMpaa", "ageRating", "votes.kp", "votes.imdb", "votes.tmdb", "votes.filmCritics", "votes.russianFilmCritics", "votes.await", "budget.value", "budget.currency", "audience.count", "audience.country", "movieLength", "seriesLength", "totalSeriesLength", "genres.name", "countries.name", "poster.url", "backdrop.url", "logo.url", "ticketsOnSale", "videos.trailers.url", "videos.trailers.site", "videos.trailers.name", "networks.items.name", "networks.items.logo.url", "persons.id", "persons.name", "persons.enName", "persons.photo", "persons.description", "persons.profession", "persons.enProfession", "facts.type", "facts.value", "facts.spoiler", "fees.world.value", "fees.usa.value", "fees.russia.value", "premiere.world", "premiere.usa", "premiere.russia", "premiere.digital", "premiere.dvd", "premiere.bluRay", "premiere.cinema", "premiere.country", "similarMovies.id", "similarMovies.name", "similarMovies.enName", "similarMovies.alternativeName", "similarMovies.poster.url", "similarMovies.rating.kp", "similarMovies.rating.imdb", "similarMovies.rating.tmdb", "similarMovies.year", "sequelsAndPrequels.id", "sequelsAndPrequels.name", "sequelsAndPrequels.enName", "sequelsAndPrequels.alternativeName", "sequelsAndPrequels.poster.url", "sequelsAndPrequels.rating.kp", "sequelsAndPrequels.rating.imdb", "sequelsAndPrequels.rating.tmdb", "sequelsAndPrequels.year", "watchability.items.name", "watchability.items.url", "watchability.items.logo.url", "lists", "top10", "top250", "updatedAt", "createdAt"];
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Сортировка по полям из модели";
                };
                readonly sortType: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Тип сортировки применительно к полям из sortField (пример: `\"1\", \"-1\"`)";
                };
                readonly id: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по ID KinoPoisk (пример: `\"666\", \"555\", \"!666\"`)";
                };
                readonly "externalId.imdb": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по IMDB ID (пример: `\"tt666\", \"tt555\", \"!tt666\"`)";
                };
                readonly "externalId.tmdb": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "number";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по TMDB ID (пример: `666, 555, !666`)";
                };
                readonly "externalId.kpHD": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по id KinoPoisk HD (пример: `\"48e8d0acb0f62d8585101798eaeceec5\", \"!48e8d0acb0f62d8585101798eaeceec5\"`)";
                };
                readonly type: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly enum: readonly ["movie", "tv-series", "cartoon", "animated-series", "anime"];
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по типу фильма (пример: `\"movie\", \"tv-series\", \"!anime\"`)";
                };
                readonly typeNumber: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по номеру типа фильма (пример: `1, 2, !3`). Список типов: 1 (movie), 2 (tv-series), 3 (cartoon), 4 (anime), 5 (animated-series).";
                };
                readonly isSeries: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по индикатору сериала (пример: `true, false`)";
                };
                readonly status: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly enum: readonly ["announced", "completed", "filming", "post-production", "pre-production"];
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по статусу фильма (пример: `\"announced\", \"completed\", \"!filming\"`)";
                };
                readonly year: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по году (пример: `1874, 2050, !2020, 2020-2024`)";
                };
                readonly "releaseYears.start": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по года начала релиза (пример: `1874, 2050, !2020, 2020-2024`)";
                };
                readonly "releaseYears.end": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по года окончания релиза (пример: `1874, 2050, !2020, 2020-2024`)";
                };
                readonly "rating.kp": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по рейтингу Кинопоиск (пример: `7, 10, 7.2-10`)";
                };
                readonly "rating.imdb": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по рейтингу IMDB (пример: `7, 10, 7.2-10`)";
                };
                readonly "rating.tmdb": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по рейтингу TMDB (пример: `7, 10, 7.2-10`)";
                };
                readonly ratingMpaa: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по рейтингу MPAA (пример: `\"G\", \"NC-17\", \"!R\"`)";
                };
                readonly ageRating: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по возрастному рейтингу (пример: `12, !18, 12-18`)";
                };
                readonly "votes.kp": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по количеству голосов на KP (пример: `1000-6666666`)";
                };
                readonly "votes.imdb": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по количеству голосов на IMDB (пример: `1000-6666666`)";
                };
                readonly "votes.tmdb": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по количеству голосов на TMDB (пример: `1000-6666666`)";
                };
                readonly "votes.filmCritics": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по количеству голосов кинокритиков (пример: `1000-6666666`)";
                };
                readonly "votes.russianFilmCritics": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по количеству голосов кинокритиков из России (пример: `1000-6666666`)";
                };
                readonly "votes.await": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по количеству голосов ожидания на Кинопоиске (пример: `1000-6666666`)";
                };
                readonly "budget.value": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по бюджету фильма (пример: `1000-6666666`)";
                };
                readonly "audience.count": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по количеству аудитории (пример: `1000-6666666`)";
                };
                readonly movieLength: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по продолжительности фильма (пример: `100-120`)";
                };
                readonly seriesLength: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по всей продолжительности одной серии (пример: `20-60`)";
                };
                readonly totalSeriesLength: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по всей продолжительности сериала (пример: `100-120`)";
                };
                readonly "genres.name": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по жанрам (пример: `\"драма\", \"комедия\", \"!мелодрама\", \"+ужасы\"`)";
                };
                readonly "countries.name": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по странам (пример: `\"США\", \"Россия\", \"!Франция\" , \"+Великобритания\"`)";
                };
                readonly ticketsOnSale: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по наличию билетов в продаже (пример: `true, false`)";
                };
                readonly "networks.items.name": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по сетям производства фильма (пример: `\"HBO\", \"Netflix\", \"!Amazon\"`)";
                };
                readonly "persons.id": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по ID персон (пример: `666, 555, !666`)";
                };
                readonly "persons.profession": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по профессиям персон (пример: `\"актер\", \"режиссер\", \"!сценарист\"`)";
                };
                readonly "persons.enProfession": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по английским профессиям персон (пример: `\"actor\", \"director\", \"!writer\"`)";
                };
                readonly "fees.world": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по сборам в мире (пример: `1000-6666666`)";
                };
                readonly "fees.usa": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по сборам в США (пример: `1000-6666666`)";
                };
                readonly "fees.russia": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по сборам в России (пример: `1000-6666666`)";
                };
                readonly "premiere.world": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по дате премьеры в мире (пример: `01.01.2020, 01.01.2020-31.12.2020`)";
                };
                readonly "premiere.usa": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по дате премьеры в США (пример: `01.01.2020, 01.01.2020-31.12.2020`)";
                };
                readonly "premiere.russia": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по дате премьеры в России (пример: `01.01.2020, 01.01.2020-31.12.2020`)";
                };
                readonly "premiere.digital": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по дате премьеры в стриминговых сервисах (пример: `01.01.2020, 01.01.2020-31.12.2020`)";
                };
                readonly "premiere.cinema": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по дате премьеры в кинотеатрах (пример: `01.01.2020, 01.01.2020-31.12.2020`)";
                };
                readonly "premiere.country": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по стране премьеры (пример: `\"США\", \"Россия\", \"!Франция\" , \"+Великобритания\"`)";
                };
                readonly "similarMovies.id": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по ID KinoPoisk из списка похожих фильмов (пример: `666, 555, !666`)";
                };
                readonly "sequelsAndPrequels.id": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по ID KinoPoisk из списка сиквелов и преквелов (пример: `666, 555, !666`)";
                };
                readonly "watchability.items.name": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по доуступным платформам для просмотра (пример: `\"ivi\", \"okko\", \"!megogo\"`)";
                };
                readonly lists: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по коллекциям из KinoPoisk (пример: `\"top250\", \"top-100-indian-movies\", \"!top-100-movies\"`)";
                };
                readonly updatedAt: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по дате обновления в базе (пример: `01.01.2020, 01.01.2020-31.12.2020`)";
                };
                readonly createdAt: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по дате добавления в базу (пример: `01.01.2020, 01.01.2020-31.12.2020`)";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly docs: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "number";
                                readonly description: "Id фильма с кинопоиска";
                                readonly examples: readonly [666];
                            };
                            readonly externalId: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly kpHD: {
                                        readonly type: "string";
                                        readonly description: "ID из kinopoisk HD";
                                        readonly examples: readonly ["48e8d0acb0f62d8585101798eaeceec5"];
                                    };
                                    readonly imdb: {
                                        readonly type: "string";
                                        readonly examples: readonly ["tt0232500"];
                                    };
                                    readonly tmdb: {
                                        readonly type: "number";
                                        readonly examples: readonly [9799];
                                    };
                                };
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly examples: readonly ["Человек паук"];
                            };
                            readonly alternativeName: {
                                readonly type: "string";
                                readonly examples: readonly ["Spider man"];
                            };
                            readonly enName: {
                                readonly type: "string";
                                readonly examples: readonly ["Spider man"];
                            };
                            readonly names: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly name: {
                                            readonly type: "string";
                                        };
                                        readonly language: {
                                            readonly type: "string";
                                        };
                                        readonly type: {
                                            readonly type: "string";
                                        };
                                    };
                                };
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Тип тайтла. Доступны: movie | tv-series | cartoon | anime | animated-series | tv-show";
                                readonly examples: readonly ["movie"];
                            };
                            readonly typeNumber: {
                                readonly type: "number";
                                readonly description: "Тип тайтла в числовом обозначении. Доступны: 1 (movie) | 2 (tv-series) | 3 (cartoon) | 4 (anime) | 5 (animated-series) | 6 (tv-show)";
                                readonly examples: readonly [1];
                            };
                            readonly year: {
                                readonly type: "number";
                                readonly description: "Год премьеры. При поиске по этому полю, можно использовать интервалы 1860-2030";
                                readonly examples: readonly [2023];
                            };
                            readonly description: {
                                readonly type: "string";
                                readonly description: "Описание тайтла";
                            };
                            readonly shortDescription: {
                                readonly type: "string";
                                readonly description: "Сокращенное описание";
                            };
                            readonly slogan: {
                                readonly type: "string";
                                readonly description: "Слоган";
                            };
                            readonly status: {
                                readonly type: "string";
                                readonly description: "Статус релиза тайтла. Доступные значения: filming | pre-production | completed | announced | post-production";
                                readonly examples: readonly ["completed"];
                            };
                            readonly rating: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly kp: {
                                        readonly type: "number";
                                        readonly description: "Рейтинг кинопоиска";
                                        readonly examples: readonly [6.2];
                                    };
                                    readonly imdb: {
                                        readonly type: "number";
                                        readonly description: "Рейтинг IMDB";
                                        readonly examples: readonly [8.4];
                                    };
                                    readonly tmdb: {
                                        readonly type: "number";
                                        readonly description: "Рейтинг TMDB";
                                        readonly examples: readonly [3.2];
                                    };
                                    readonly filmCritics: {
                                        readonly type: "number";
                                        readonly description: "Рейтинг кинокритиков";
                                        readonly examples: readonly [10];
                                    };
                                    readonly russianFilmCritics: {
                                        readonly type: "number";
                                        readonly description: "Рейтинг кинокритиков из РФ";
                                        readonly examples: readonly [5.1];
                                    };
                                    readonly await: {
                                        readonly type: "number";
                                        readonly description: "Рейтинг основанный на ожиданиях пользователей";
                                        readonly examples: readonly [6.1];
                                    };
                                };
                            };
                            readonly votes: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly kp: {
                                        readonly type: "string";
                                        readonly examples: readonly [60000];
                                    };
                                    readonly imdb: {
                                        readonly type: "number";
                                        readonly examples: readonly [50000];
                                    };
                                    readonly tmdb: {
                                        readonly type: "number";
                                        readonly examples: readonly [10000];
                                    };
                                    readonly filmCritics: {
                                        readonly type: "number";
                                        readonly description: "Количество голосов кинокритиков";
                                        readonly examples: readonly [10000];
                                    };
                                    readonly russianFilmCritics: {
                                        readonly type: "number";
                                        readonly description: "Количество голосов кинокритиков из РФ";
                                        readonly examples: readonly [4000];
                                    };
                                    readonly await: {
                                        readonly type: "number";
                                        readonly description: "Количество ожидающих выхода";
                                        readonly examples: readonly [34000];
                                    };
                                };
                            };
                            readonly movieLength: {
                                readonly type: "number";
                                readonly description: "Продолжительность фильма";
                                readonly examples: readonly [120];
                            };
                            readonly ratingMpaa: {
                                readonly type: "string";
                                readonly description: "Возрастной рейтинг по MPAA";
                                readonly examples: readonly ["pg13"];
                            };
                            readonly ageRating: {
                                readonly type: "number";
                                readonly description: "Возрастной рейтинг";
                                readonly examples: readonly ["16"];
                            };
                            readonly logo: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly url: {
                                        readonly type: "string";
                                        readonly description: "Чтобы найти фильмы с этим полем, используйте: `!null`";
                                    };
                                };
                            };
                            readonly poster: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly url: {
                                        readonly type: "string";
                                        readonly description: "Чтобы найти фильмы с этим полем, используйте: `!null`";
                                    };
                                    readonly previewUrl: {
                                        readonly type: "string";
                                        readonly description: "Чтобы найти фильмы с этим полем, используйте: `!null`";
                                    };
                                };
                            };
                            readonly backdrop: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly url: {
                                        readonly type: "string";
                                        readonly description: "Чтобы найти фильмы с этим полем, используйте: `!null`";
                                    };
                                    readonly previewUrl: {
                                        readonly type: "string";
                                        readonly description: "Чтобы найти фильмы с этим полем, используйте: `!null`";
                                    };
                                };
                            };
                            readonly videos: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly trailers: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly url: {
                                                    readonly type: "string";
                                                    readonly description: "Url трейлера";
                                                    readonly examples: readonly ["https://www.youtube.com/embed/ZsJz2TJAPjw"];
                                                };
                                                readonly name: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["Official Trailer"];
                                                };
                                                readonly site: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["youtube"];
                                                };
                                                readonly type: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["TRAILER"];
                                                };
                                                readonly size: {
                                                    readonly type: "number";
                                                };
                                            };
                                            readonly required: readonly ["size"];
                                        };
                                    };
                                    readonly teasers: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly url: {
                                                    readonly type: "string";
                                                    readonly description: "Url трейлера";
                                                    readonly examples: readonly ["https://www.youtube.com/embed/ZsJz2TJAPjw"];
                                                };
                                                readonly name: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["Official Trailer"];
                                                };
                                                readonly site: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["youtube"];
                                                };
                                                readonly type: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["TRAILER"];
                                                };
                                                readonly size: {
                                                    readonly type: "number";
                                                };
                                            };
                                            readonly required: readonly ["size"];
                                        };
                                    };
                                };
                                readonly required: readonly ["teasers"];
                            };
                            readonly genres: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly name: {
                                            readonly type: "string";
                                        };
                                    };
                                };
                            };
                            readonly countries: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly name: {
                                            readonly type: "string";
                                        };
                                    };
                                };
                            };
                            readonly persons: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly id: {
                                            readonly type: "number";
                                            readonly description: "Id персоны с кинопоиска";
                                            readonly examples: readonly [6317];
                                        };
                                        readonly photo: {
                                            readonly type: "string";
                                            readonly examples: readonly ["https://st.kp.yandex.net/images/actor_iphone/iphone360_6317.jpg"];
                                        };
                                        readonly name: {
                                            readonly type: "string";
                                            readonly examples: readonly ["Пол Уокер"];
                                        };
                                        readonly enName: {
                                            readonly type: "string";
                                            readonly examples: readonly ["Paul Walker"];
                                        };
                                        readonly description: {
                                            readonly type: "string";
                                        };
                                        readonly profession: {
                                            readonly type: "string";
                                        };
                                        readonly enProfession: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly required: readonly ["description", "profession", "enProfession"];
                                };
                            };
                            readonly reviewInfo: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly count: {
                                        readonly type: "number";
                                    };
                                    readonly positiveCount: {
                                        readonly type: "number";
                                    };
                                    readonly percentage: {
                                        readonly type: "string";
                                    };
                                };
                            };
                            readonly seasonsInfo: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly number: {
                                            readonly type: "number";
                                        };
                                        readonly episodesCount: {
                                            readonly type: "number";
                                        };
                                    };
                                };
                            };
                            readonly budget: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly value: {
                                        readonly type: "number";
                                        readonly description: "Сумма";
                                        readonly examples: readonly [207283];
                                    };
                                    readonly currency: {
                                        readonly type: "string";
                                        readonly description: "Валюта";
                                        readonly examples: readonly ["€"];
                                    };
                                };
                            };
                            readonly fees: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly world: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly value: {
                                                readonly type: "number";
                                                readonly description: "Сумма";
                                                readonly examples: readonly [207283];
                                            };
                                            readonly currency: {
                                                readonly type: "string";
                                                readonly description: "Валюта";
                                                readonly examples: readonly ["€"];
                                            };
                                        };
                                    };
                                    readonly russia: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly value: {
                                                readonly type: "number";
                                                readonly description: "Сумма";
                                                readonly examples: readonly [207283];
                                            };
                                            readonly currency: {
                                                readonly type: "string";
                                                readonly description: "Валюта";
                                                readonly examples: readonly ["€"];
                                            };
                                        };
                                    };
                                    readonly usa: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly value: {
                                                readonly type: "number";
                                                readonly description: "Сумма";
                                                readonly examples: readonly [207283];
                                            };
                                            readonly currency: {
                                                readonly type: "string";
                                                readonly description: "Валюта";
                                                readonly examples: readonly ["€"];
                                            };
                                        };
                                    };
                                };
                            };
                            readonly premiere: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly country: {
                                        readonly type: "string";
                                        readonly examples: readonly ["США"];
                                    };
                                    readonly world: {
                                        readonly format: "date-time";
                                        readonly type: "string";
                                        readonly description: "Для более релевантного поиска, используйте интервал дат 01.02.2022-01.02.2023";
                                        readonly examples: readonly ["2023-02-25T02:44:39.359Z"];
                                    };
                                    readonly russia: {
                                        readonly format: "date-time";
                                        readonly type: "string";
                                        readonly description: "Для более релевантного поиска, используйте интервал дат 01.02.2022-01.02.2023";
                                        readonly examples: readonly ["2023-02-25T02:44:39.359Z"];
                                    };
                                    readonly digital: {
                                        readonly type: "string";
                                    };
                                    readonly cinema: {
                                        readonly format: "date-time";
                                        readonly type: "string";
                                        readonly description: "Для более релевантного поиска, используйте интервал дат 01.02.2022-01.02.2023";
                                        readonly examples: readonly ["2023-02-25T02:44:39.359Z"];
                                    };
                                    readonly bluray: {
                                        readonly type: "string";
                                    };
                                    readonly dvd: {
                                        readonly type: "string";
                                    };
                                };
                                readonly required: readonly ["bluray", "dvd"];
                            };
                            readonly similarMovies: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly id: {
                                            readonly type: "number";
                                        };
                                        readonly rating: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly kp: {
                                                    readonly type: "number";
                                                    readonly description: "Рейтинг кинопоиска";
                                                    readonly examples: readonly [6.2];
                                                };
                                                readonly imdb: {
                                                    readonly type: "number";
                                                    readonly description: "Рейтинг IMDB";
                                                    readonly examples: readonly [8.4];
                                                };
                                                readonly tmdb: {
                                                    readonly type: "number";
                                                    readonly description: "Рейтинг TMDB";
                                                    readonly examples: readonly [3.2];
                                                };
                                                readonly filmCritics: {
                                                    readonly type: "number";
                                                    readonly description: "Рейтинг кинокритиков";
                                                    readonly examples: readonly [10];
                                                };
                                                readonly russianFilmCritics: {
                                                    readonly type: "number";
                                                    readonly description: "Рейтинг кинокритиков из РФ";
                                                    readonly examples: readonly [5.1];
                                                };
                                                readonly await: {
                                                    readonly type: "number";
                                                    readonly description: "Рейтинг основанный на ожиданиях пользователей";
                                                    readonly examples: readonly [6.1];
                                                };
                                            };
                                        };
                                        readonly year: {
                                            readonly type: "number";
                                            readonly examples: readonly [2021];
                                        };
                                        readonly name: {
                                            readonly type: "string";
                                        };
                                        readonly enName: {
                                            readonly type: "string";
                                        };
                                        readonly alternativeName: {
                                            readonly type: "string";
                                        };
                                        readonly type: {
                                            readonly type: "string";
                                        };
                                        readonly poster: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly url: {
                                                    readonly type: "string";
                                                    readonly description: "Чтобы найти фильмы с этим полем, используйте: `!null`";
                                                };
                                                readonly previewUrl: {
                                                    readonly type: "string";
                                                    readonly description: "Чтобы найти фильмы с этим полем, используйте: `!null`";
                                                };
                                            };
                                        };
                                    };
                                    readonly required: readonly ["rating", "year", "name", "enName", "alternativeName", "poster"];
                                };
                            };
                            readonly sequelsAndPrequels: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly id: {
                                            readonly type: "number";
                                        };
                                        readonly rating: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly kp: {
                                                    readonly type: "number";
                                                    readonly description: "Рейтинг кинопоиска";
                                                    readonly examples: readonly [6.2];
                                                };
                                                readonly imdb: {
                                                    readonly type: "number";
                                                    readonly description: "Рейтинг IMDB";
                                                    readonly examples: readonly [8.4];
                                                };
                                                readonly tmdb: {
                                                    readonly type: "number";
                                                    readonly description: "Рейтинг TMDB";
                                                    readonly examples: readonly [3.2];
                                                };
                                                readonly filmCritics: {
                                                    readonly type: "number";
                                                    readonly description: "Рейтинг кинокритиков";
                                                    readonly examples: readonly [10];
                                                };
                                                readonly russianFilmCritics: {
                                                    readonly type: "number";
                                                    readonly description: "Рейтинг кинокритиков из РФ";
                                                    readonly examples: readonly [5.1];
                                                };
                                                readonly await: {
                                                    readonly type: "number";
                                                    readonly description: "Рейтинг основанный на ожиданиях пользователей";
                                                    readonly examples: readonly [6.1];
                                                };
                                            };
                                        };
                                        readonly year: {
                                            readonly type: "number";
                                            readonly examples: readonly [2021];
                                        };
                                        readonly name: {
                                            readonly type: "string";
                                        };
                                        readonly enName: {
                                            readonly type: "string";
                                        };
                                        readonly alternativeName: {
                                            readonly type: "string";
                                        };
                                        readonly type: {
                                            readonly type: "string";
                                        };
                                        readonly poster: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly url: {
                                                    readonly type: "string";
                                                    readonly description: "Чтобы найти фильмы с этим полем, используйте: `!null`";
                                                };
                                                readonly previewUrl: {
                                                    readonly type: "string";
                                                    readonly description: "Чтобы найти фильмы с этим полем, используйте: `!null`";
                                                };
                                            };
                                        };
                                    };
                                    readonly required: readonly ["rating", "year", "name", "enName", "alternativeName", "poster"];
                                };
                            };
                            readonly watchability: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly items: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly name: {
                                                    readonly type: "string";
                                                };
                                                readonly logo: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly url: {
                                                            readonly type: "string";
                                                            readonly description: "Чтобы найти фильмы с этим полем, используйте: `!null`";
                                                        };
                                                    };
                                                };
                                                readonly url: {
                                                    readonly type: "string";
                                                };
                                            };
                                            readonly required: readonly ["logo", "url"];
                                        };
                                    };
                                };
                            };
                            readonly releaseYears: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly start: {
                                            readonly type: "number";
                                            readonly description: "Год начала";
                                            readonly examples: readonly [2022];
                                        };
                                        readonly end: {
                                            readonly type: "number";
                                            readonly description: "Год окончания";
                                            readonly examples: readonly [2023];
                                        };
                                    };
                                };
                            };
                            readonly top10: {
                                readonly type: "number";
                                readonly description: "Позиция тайтла в топ 10. Чтобы найти фильмы участвующие в рейтинге используйте: `!null`";
                                readonly examples: readonly [1];
                            };
                            readonly top250: {
                                readonly type: "number";
                                readonly description: "Позиция тайтла в топ 250. Чтобы найти фильмы участвующие в рейтинге используйте: `!null`";
                                readonly examples: readonly [200];
                            };
                            readonly ticketsOnSale: {
                                readonly type: "boolean";
                                readonly description: "Признак того, что тайтл находится в прокате";
                                readonly examples: readonly [true];
                            };
                            readonly totalSeriesLength: {
                                readonly type: "number";
                                readonly description: "Продолжительность всех серий";
                                readonly examples: readonly [155];
                            };
                            readonly seriesLength: {
                                readonly type: "number";
                                readonly description: "Средняя продолжительность серии";
                                readonly examples: readonly [20];
                            };
                            readonly isSeries: {
                                readonly type: "boolean";
                                readonly description: "Признак сериала";
                                readonly examples: readonly [true];
                            };
                            readonly audience: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly count: {
                                            readonly type: "number";
                                            readonly description: "Количество просмотров в кино";
                                            readonly examples: readonly [1000];
                                        };
                                        readonly country: {
                                            readonly type: "string";
                                            readonly description: "Страна в которой проходил показ";
                                            readonly examples: readonly ["Россия"];
                                        };
                                    };
                                    readonly required: readonly ["count", "country"];
                                };
                            };
                            readonly lists: {
                                readonly description: "Список коллекций, в которых находится тайтл.";
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "string";
                                };
                                readonly examples: readonly ["250 лучших сериалов"];
                            };
                            readonly networks: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly items: {
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly name: {
                                                        readonly type: "string";
                                                        readonly examples: readonly ["Netflix"];
                                                    };
                                                    readonly logo: {
                                                        readonly type: "object";
                                                        readonly properties: {
                                                            readonly url: {
                                                                readonly type: "string";
                                                                readonly description: "Чтобы найти фильмы с этим полем, используйте: `!null`";
                                                            };
                                                        };
                                                    };
                                                };
                                                readonly required: readonly ["name", "logo"];
                                            };
                                        };
                                    };
                                    readonly required: readonly ["items"];
                                };
                            };
                            readonly updatedAt: {
                                readonly format: "date-time";
                                readonly type: "string";
                            };
                            readonly createdAt: {
                                readonly format: "date-time";
                                readonly type: "string";
                            };
                            readonly facts: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly value: {
                                            readonly type: "string";
                                        };
                                        readonly type: {
                                            readonly type: "string";
                                        };
                                        readonly spoiler: {
                                            readonly type: "boolean";
                                        };
                                    };
                                    readonly required: readonly ["value", "type", "spoiler"];
                                };
                            };
                            readonly imagesInfo: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly postersCount: {
                                        readonly type: "number";
                                    };
                                    readonly backdropsCount: {
                                        readonly type: "number";
                                    };
                                    readonly framesCount: {
                                        readonly type: "number";
                                    };
                                };
                                readonly required: readonly ["postersCount", "backdropsCount", "framesCount"];
                            };
                        };
                        readonly required: readonly ["id", "externalId", "names", "type", "typeNumber", "isSeries", "networks", "updatedAt", "createdAt", "facts", "imagesInfo"];
                    };
                };
                readonly total: {
                    readonly type: "number";
                    readonly description: "Общее количество результатов";
                };
                readonly limit: {
                    readonly type: "number";
                    readonly description: "Количество результатов на странице";
                };
                readonly page: {
                    readonly type: "number";
                    readonly description: "Текущая страница";
                };
                readonly pages: {
                    readonly type: "number";
                    readonly description: "Сколько страниц всего";
                };
            };
            readonly required: readonly ["docs", "total", "limit", "page", "pages"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const MovieControllerFindOneV14: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID из кинопоиска";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly description: "Id фильма с кинопоиска";
                    readonly examples: readonly [666];
                };
                readonly externalId: {
                    readonly type: "object";
                    readonly properties: {
                        readonly kpHD: {
                            readonly type: "string";
                            readonly description: "ID из kinopoisk HD";
                            readonly examples: readonly ["48e8d0acb0f62d8585101798eaeceec5"];
                        };
                        readonly imdb: {
                            readonly type: "string";
                            readonly examples: readonly ["tt0232500"];
                        };
                        readonly tmdb: {
                            readonly type: "number";
                            readonly examples: readonly [9799];
                        };
                    };
                };
                readonly name: {
                    readonly type: "string";
                    readonly examples: readonly ["Человек паук"];
                };
                readonly alternativeName: {
                    readonly type: "string";
                    readonly examples: readonly ["Spider man"];
                };
                readonly enName: {
                    readonly type: "string";
                    readonly examples: readonly ["Spider man"];
                };
                readonly names: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly name: {
                                readonly type: "string";
                            };
                            readonly language: {
                                readonly type: "string";
                            };
                            readonly type: {
                                readonly type: "string";
                            };
                        };
                    };
                };
                readonly type: {
                    readonly type: "string";
                    readonly description: "Тип тайтла. Доступны: movie | tv-series | cartoon | anime | animated-series | tv-show";
                    readonly examples: readonly ["movie"];
                };
                readonly typeNumber: {
                    readonly type: "number";
                    readonly description: "Тип тайтла в числовом обозначении. Доступны: 1 (movie) | 2 (tv-series) | 3 (cartoon) | 4 (anime) | 5 (animated-series) | 6 (tv-show)";
                    readonly examples: readonly [1];
                };
                readonly year: {
                    readonly type: "number";
                    readonly description: "Год премьеры. При поиске по этому полю, можно использовать интервалы 1860-2030";
                    readonly examples: readonly [2023];
                };
                readonly description: {
                    readonly type: "string";
                    readonly description: "Описание тайтла";
                };
                readonly shortDescription: {
                    readonly type: "string";
                    readonly description: "Сокращенное описание";
                };
                readonly slogan: {
                    readonly type: "string";
                    readonly description: "Слоган";
                };
                readonly status: {
                    readonly type: "string";
                    readonly description: "Статус релиза тайтла. Доступные значения: filming | pre-production | completed | announced | post-production";
                    readonly examples: readonly ["completed"];
                };
                readonly rating: {
                    readonly type: "object";
                    readonly properties: {
                        readonly kp: {
                            readonly type: "number";
                            readonly description: "Рейтинг кинопоиска";
                            readonly examples: readonly [6.2];
                        };
                        readonly imdb: {
                            readonly type: "number";
                            readonly description: "Рейтинг IMDB";
                            readonly examples: readonly [8.4];
                        };
                        readonly tmdb: {
                            readonly type: "number";
                            readonly description: "Рейтинг TMDB";
                            readonly examples: readonly [3.2];
                        };
                        readonly filmCritics: {
                            readonly type: "number";
                            readonly description: "Рейтинг кинокритиков";
                            readonly examples: readonly [10];
                        };
                        readonly russianFilmCritics: {
                            readonly type: "number";
                            readonly description: "Рейтинг кинокритиков из РФ";
                            readonly examples: readonly [5.1];
                        };
                        readonly await: {
                            readonly type: "number";
                            readonly description: "Рейтинг основанный на ожиданиях пользователей";
                            readonly examples: readonly [6.1];
                        };
                    };
                };
                readonly votes: {
                    readonly type: "object";
                    readonly properties: {
                        readonly kp: {
                            readonly type: "string";
                            readonly examples: readonly [60000];
                        };
                        readonly imdb: {
                            readonly type: "number";
                            readonly examples: readonly [50000];
                        };
                        readonly tmdb: {
                            readonly type: "number";
                            readonly examples: readonly [10000];
                        };
                        readonly filmCritics: {
                            readonly type: "number";
                            readonly description: "Количество голосов кинокритиков";
                            readonly examples: readonly [10000];
                        };
                        readonly russianFilmCritics: {
                            readonly type: "number";
                            readonly description: "Количество голосов кинокритиков из РФ";
                            readonly examples: readonly [4000];
                        };
                        readonly await: {
                            readonly type: "number";
                            readonly description: "Количество ожидающих выхода";
                            readonly examples: readonly [34000];
                        };
                    };
                };
                readonly movieLength: {
                    readonly type: "number";
                    readonly description: "Продолжительность фильма";
                    readonly examples: readonly [120];
                };
                readonly ratingMpaa: {
                    readonly type: "string";
                    readonly description: "Возрастной рейтинг по MPAA";
                    readonly examples: readonly ["pg13"];
                };
                readonly ageRating: {
                    readonly type: "number";
                    readonly description: "Возрастной рейтинг";
                    readonly examples: readonly ["16"];
                };
                readonly logo: {
                    readonly type: "object";
                    readonly properties: {
                        readonly url: {
                            readonly type: "string";
                            readonly description: "Чтобы найти фильмы с этим полем, используйте: `!null`";
                        };
                    };
                };
                readonly poster: {
                    readonly type: "object";
                    readonly properties: {
                        readonly url: {
                            readonly type: "string";
                            readonly description: "Чтобы найти фильмы с этим полем, используйте: `!null`";
                        };
                        readonly previewUrl: {
                            readonly type: "string";
                            readonly description: "Чтобы найти фильмы с этим полем, используйте: `!null`";
                        };
                    };
                };
                readonly backdrop: {
                    readonly type: "object";
                    readonly properties: {
                        readonly url: {
                            readonly type: "string";
                            readonly description: "Чтобы найти фильмы с этим полем, используйте: `!null`";
                        };
                        readonly previewUrl: {
                            readonly type: "string";
                            readonly description: "Чтобы найти фильмы с этим полем, используйте: `!null`";
                        };
                    };
                };
                readonly videos: {
                    readonly type: "object";
                    readonly properties: {
                        readonly trailers: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly url: {
                                        readonly type: "string";
                                        readonly description: "Url трейлера";
                                        readonly examples: readonly ["https://www.youtube.com/embed/ZsJz2TJAPjw"];
                                    };
                                    readonly name: {
                                        readonly type: "string";
                                        readonly examples: readonly ["Official Trailer"];
                                    };
                                    readonly site: {
                                        readonly type: "string";
                                        readonly examples: readonly ["youtube"];
                                    };
                                    readonly type: {
                                        readonly type: "string";
                                        readonly examples: readonly ["TRAILER"];
                                    };
                                    readonly size: {
                                        readonly type: "number";
                                    };
                                };
                                readonly required: readonly ["size"];
                            };
                        };
                        readonly teasers: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly url: {
                                        readonly type: "string";
                                        readonly description: "Url трейлера";
                                        readonly examples: readonly ["https://www.youtube.com/embed/ZsJz2TJAPjw"];
                                    };
                                    readonly name: {
                                        readonly type: "string";
                                        readonly examples: readonly ["Official Trailer"];
                                    };
                                    readonly site: {
                                        readonly type: "string";
                                        readonly examples: readonly ["youtube"];
                                    };
                                    readonly type: {
                                        readonly type: "string";
                                        readonly examples: readonly ["TRAILER"];
                                    };
                                    readonly size: {
                                        readonly type: "number";
                                    };
                                };
                                readonly required: readonly ["size"];
                            };
                        };
                    };
                    readonly required: readonly ["teasers"];
                };
                readonly genres: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly name: {
                                readonly type: "string";
                            };
                        };
                    };
                };
                readonly countries: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly name: {
                                readonly type: "string";
                            };
                        };
                    };
                };
                readonly persons: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "number";
                                readonly description: "Id персоны с кинопоиска";
                                readonly examples: readonly [6317];
                            };
                            readonly photo: {
                                readonly type: "string";
                                readonly examples: readonly ["https://st.kp.yandex.net/images/actor_iphone/iphone360_6317.jpg"];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly examples: readonly ["Пол Уокер"];
                            };
                            readonly enName: {
                                readonly type: "string";
                                readonly examples: readonly ["Paul Walker"];
                            };
                            readonly description: {
                                readonly type: "string";
                            };
                            readonly profession: {
                                readonly type: "string";
                            };
                            readonly enProfession: {
                                readonly type: "string";
                            };
                        };
                        readonly required: readonly ["description", "profession", "enProfession"];
                    };
                };
                readonly reviewInfo: {
                    readonly type: "object";
                    readonly properties: {
                        readonly count: {
                            readonly type: "number";
                        };
                        readonly positiveCount: {
                            readonly type: "number";
                        };
                        readonly percentage: {
                            readonly type: "string";
                        };
                    };
                };
                readonly seasonsInfo: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly number: {
                                readonly type: "number";
                            };
                            readonly episodesCount: {
                                readonly type: "number";
                            };
                        };
                    };
                };
                readonly budget: {
                    readonly type: "object";
                    readonly properties: {
                        readonly value: {
                            readonly type: "number";
                            readonly description: "Сумма";
                            readonly examples: readonly [207283];
                        };
                        readonly currency: {
                            readonly type: "string";
                            readonly description: "Валюта";
                            readonly examples: readonly ["€"];
                        };
                    };
                };
                readonly fees: {
                    readonly type: "object";
                    readonly properties: {
                        readonly world: {
                            readonly type: "object";
                            readonly properties: {
                                readonly value: {
                                    readonly type: "number";
                                    readonly description: "Сумма";
                                    readonly examples: readonly [207283];
                                };
                                readonly currency: {
                                    readonly type: "string";
                                    readonly description: "Валюта";
                                    readonly examples: readonly ["€"];
                                };
                            };
                        };
                        readonly russia: {
                            readonly type: "object";
                            readonly properties: {
                                readonly value: {
                                    readonly type: "number";
                                    readonly description: "Сумма";
                                    readonly examples: readonly [207283];
                                };
                                readonly currency: {
                                    readonly type: "string";
                                    readonly description: "Валюта";
                                    readonly examples: readonly ["€"];
                                };
                            };
                        };
                        readonly usa: {
                            readonly type: "object";
                            readonly properties: {
                                readonly value: {
                                    readonly type: "number";
                                    readonly description: "Сумма";
                                    readonly examples: readonly [207283];
                                };
                                readonly currency: {
                                    readonly type: "string";
                                    readonly description: "Валюта";
                                    readonly examples: readonly ["€"];
                                };
                            };
                        };
                    };
                };
                readonly premiere: {
                    readonly type: "object";
                    readonly properties: {
                        readonly country: {
                            readonly type: "string";
                            readonly examples: readonly ["США"];
                        };
                        readonly world: {
                            readonly format: "date-time";
                            readonly type: "string";
                            readonly description: "Для более релевантного поиска, используйте интервал дат 01.02.2022-01.02.2023";
                            readonly examples: readonly ["2023-02-25T02:44:39.359Z"];
                        };
                        readonly russia: {
                            readonly format: "date-time";
                            readonly type: "string";
                            readonly description: "Для более релевантного поиска, используйте интервал дат 01.02.2022-01.02.2023";
                            readonly examples: readonly ["2023-02-25T02:44:39.359Z"];
                        };
                        readonly digital: {
                            readonly type: "string";
                        };
                        readonly cinema: {
                            readonly format: "date-time";
                            readonly type: "string";
                            readonly description: "Для более релевантного поиска, используйте интервал дат 01.02.2022-01.02.2023";
                            readonly examples: readonly ["2023-02-25T02:44:39.359Z"];
                        };
                        readonly bluray: {
                            readonly type: "string";
                        };
                        readonly dvd: {
                            readonly type: "string";
                        };
                    };
                    readonly required: readonly ["bluray", "dvd"];
                };
                readonly similarMovies: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "number";
                            };
                            readonly rating: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly kp: {
                                        readonly type: "number";
                                        readonly description: "Рейтинг кинопоиска";
                                        readonly examples: readonly [6.2];
                                    };
                                    readonly imdb: {
                                        readonly type: "number";
                                        readonly description: "Рейтинг IMDB";
                                        readonly examples: readonly [8.4];
                                    };
                                    readonly tmdb: {
                                        readonly type: "number";
                                        readonly description: "Рейтинг TMDB";
                                        readonly examples: readonly [3.2];
                                    };
                                    readonly filmCritics: {
                                        readonly type: "number";
                                        readonly description: "Рейтинг кинокритиков";
                                        readonly examples: readonly [10];
                                    };
                                    readonly russianFilmCritics: {
                                        readonly type: "number";
                                        readonly description: "Рейтинг кинокритиков из РФ";
                                        readonly examples: readonly [5.1];
                                    };
                                    readonly await: {
                                        readonly type: "number";
                                        readonly description: "Рейтинг основанный на ожиданиях пользователей";
                                        readonly examples: readonly [6.1];
                                    };
                                };
                            };
                            readonly year: {
                                readonly type: "number";
                                readonly examples: readonly [2021];
                            };
                            readonly name: {
                                readonly type: "string";
                            };
                            readonly enName: {
                                readonly type: "string";
                            };
                            readonly alternativeName: {
                                readonly type: "string";
                            };
                            readonly type: {
                                readonly type: "string";
                            };
                            readonly poster: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly url: {
                                        readonly type: "string";
                                        readonly description: "Чтобы найти фильмы с этим полем, используйте: `!null`";
                                    };
                                    readonly previewUrl: {
                                        readonly type: "string";
                                        readonly description: "Чтобы найти фильмы с этим полем, используйте: `!null`";
                                    };
                                };
                            };
                        };
                        readonly required: readonly ["rating", "year", "name", "enName", "alternativeName", "poster"];
                    };
                };
                readonly sequelsAndPrequels: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "number";
                            };
                            readonly rating: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly kp: {
                                        readonly type: "number";
                                        readonly description: "Рейтинг кинопоиска";
                                        readonly examples: readonly [6.2];
                                    };
                                    readonly imdb: {
                                        readonly type: "number";
                                        readonly description: "Рейтинг IMDB";
                                        readonly examples: readonly [8.4];
                                    };
                                    readonly tmdb: {
                                        readonly type: "number";
                                        readonly description: "Рейтинг TMDB";
                                        readonly examples: readonly [3.2];
                                    };
                                    readonly filmCritics: {
                                        readonly type: "number";
                                        readonly description: "Рейтинг кинокритиков";
                                        readonly examples: readonly [10];
                                    };
                                    readonly russianFilmCritics: {
                                        readonly type: "number";
                                        readonly description: "Рейтинг кинокритиков из РФ";
                                        readonly examples: readonly [5.1];
                                    };
                                    readonly await: {
                                        readonly type: "number";
                                        readonly description: "Рейтинг основанный на ожиданиях пользователей";
                                        readonly examples: readonly [6.1];
                                    };
                                };
                            };
                            readonly year: {
                                readonly type: "number";
                                readonly examples: readonly [2021];
                            };
                            readonly name: {
                                readonly type: "string";
                            };
                            readonly enName: {
                                readonly type: "string";
                            };
                            readonly alternativeName: {
                                readonly type: "string";
                            };
                            readonly type: {
                                readonly type: "string";
                            };
                            readonly poster: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly url: {
                                        readonly type: "string";
                                        readonly description: "Чтобы найти фильмы с этим полем, используйте: `!null`";
                                    };
                                    readonly previewUrl: {
                                        readonly type: "string";
                                        readonly description: "Чтобы найти фильмы с этим полем, используйте: `!null`";
                                    };
                                };
                            };
                        };
                        readonly required: readonly ["rating", "year", "name", "enName", "alternativeName", "poster"];
                    };
                };
                readonly watchability: {
                    readonly type: "object";
                    readonly properties: {
                        readonly items: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly name: {
                                        readonly type: "string";
                                    };
                                    readonly logo: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly url: {
                                                readonly type: "string";
                                                readonly description: "Чтобы найти фильмы с этим полем, используйте: `!null`";
                                            };
                                        };
                                    };
                                    readonly url: {
                                        readonly type: "string";
                                    };
                                };
                                readonly required: readonly ["logo", "url"];
                            };
                        };
                    };
                };
                readonly releaseYears: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly start: {
                                readonly type: "number";
                                readonly description: "Год начала";
                                readonly examples: readonly [2022];
                            };
                            readonly end: {
                                readonly type: "number";
                                readonly description: "Год окончания";
                                readonly examples: readonly [2023];
                            };
                        };
                    };
                };
                readonly top10: {
                    readonly type: "number";
                    readonly description: "Позиция тайтла в топ 10. Чтобы найти фильмы участвующие в рейтинге используйте: `!null`";
                    readonly examples: readonly [1];
                };
                readonly top250: {
                    readonly type: "number";
                    readonly description: "Позиция тайтла в топ 250. Чтобы найти фильмы участвующие в рейтинге используйте: `!null`";
                    readonly examples: readonly [200];
                };
                readonly ticketsOnSale: {
                    readonly type: "boolean";
                    readonly description: "Признак того, что тайтл находится в прокате";
                    readonly examples: readonly [true];
                };
                readonly totalSeriesLength: {
                    readonly type: "number";
                    readonly description: "Продолжительность всех серий";
                    readonly examples: readonly [155];
                };
                readonly seriesLength: {
                    readonly type: "number";
                    readonly description: "Средняя продолжительность серии";
                    readonly examples: readonly [20];
                };
                readonly isSeries: {
                    readonly type: "boolean";
                    readonly description: "Признак сериала";
                    readonly examples: readonly [true];
                };
                readonly audience: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly count: {
                                readonly type: "number";
                                readonly description: "Количество просмотров в кино";
                                readonly examples: readonly [1000];
                            };
                            readonly country: {
                                readonly type: "string";
                                readonly description: "Страна в которой проходил показ";
                                readonly examples: readonly ["Россия"];
                            };
                        };
                        readonly required: readonly ["count", "country"];
                    };
                };
                readonly lists: {
                    readonly description: "Список коллекций, в которых находится тайтл.";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly examples: readonly ["250 лучших сериалов"];
                };
                readonly networks: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly items: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly name: {
                                            readonly type: "string";
                                            readonly examples: readonly ["Netflix"];
                                        };
                                        readonly logo: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly url: {
                                                    readonly type: "string";
                                                    readonly description: "Чтобы найти фильмы с этим полем, используйте: `!null`";
                                                };
                                            };
                                        };
                                    };
                                    readonly required: readonly ["name", "logo"];
                                };
                            };
                        };
                        readonly required: readonly ["items"];
                    };
                };
                readonly updatedAt: {
                    readonly format: "date-time";
                    readonly type: "string";
                };
                readonly createdAt: {
                    readonly format: "date-time";
                    readonly type: "string";
                };
                readonly facts: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly value: {
                                readonly type: "string";
                            };
                            readonly type: {
                                readonly type: "string";
                            };
                            readonly spoiler: {
                                readonly type: "boolean";
                            };
                        };
                        readonly required: readonly ["value", "type", "spoiler"];
                    };
                };
                readonly imagesInfo: {
                    readonly type: "object";
                    readonly properties: {
                        readonly postersCount: {
                            readonly type: "number";
                        };
                        readonly backdropsCount: {
                            readonly type: "number";
                        };
                        readonly framesCount: {
                            readonly type: "number";
                        };
                    };
                    readonly required: readonly ["postersCount", "backdropsCount", "framesCount"];
                };
            };
            readonly required: readonly ["id", "externalId", "names", "type", "typeNumber", "isSeries", "networks", "updatedAt", "createdAt", "facts", "imagesInfo"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly statusCode: {
                    readonly type: "number";
                    readonly examples: readonly [401];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["В запросе не указан токен!"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly examples: readonly ["Unauthorized"];
                };
            };
            readonly required: readonly ["statusCode", "message", "error"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly statusCode: {
                    readonly type: "number";
                    readonly examples: readonly [403];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Превышен дневной лимит!"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly examples: readonly ["Forbidden"];
                };
            };
            readonly required: readonly ["statusCode", "message", "error"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly statusCode: {
                    readonly type: "number";
                    readonly examples: readonly [403];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Превышен дневной лимит!"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly examples: readonly ["Forbidden"];
                };
            };
            readonly required: readonly ["statusCode", "message", "error"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly default: {
            readonly type: "object";
            readonly properties: {
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly error: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["statusCode", "message", "error"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const MovieControllerGetPossibleValuesByFieldName: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly field: {
                    readonly enum: readonly ["genres.name", "countries.name", "type", "typeNumber", "status"];
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["field"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly name: {
                        readonly type: "string";
                        readonly description: "Значение по которому нужно делать запрос в базу данных";
                    };
                    readonly slug: {
                        readonly type: "string";
                        readonly description: "Вспомогательное значение";
                    };
                };
                readonly required: readonly ["name", "slug"];
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly default: {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly name: {
                        readonly type: "string";
                        readonly description: "Значение по которому нужно делать запрос в базу данных";
                    };
                    readonly slug: {
                        readonly type: "string";
                        readonly description: "Вспомогательное значение";
                    };
                };
                readonly required: readonly ["name", "slug"];
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const MovieControllerGetRandomMovieV14: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly notNullFields: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly enum: readonly ["id", "externalId.imdb", "externalId.tmdb", "externalId.kpHD", "name", "enName", "alternativeName", "names.name", "description", "shortDescription", "slogan", "type", "typeNumber", "isSeries", "status", "year", "releaseYears.start", "releaseYears.end", "rating.kp", "rating.imdb", "rating.tmdb", "rating.filmCritics", "rating.russianFilmCritics", "rating.await", "ratingMpaa", "ageRating", "votes.kp", "votes.imdb", "votes.tmdb", "votes.filmCritics", "votes.russianFilmCritics", "votes.await", "budget.value", "budget.currency", "audience.count", "audience.country", "movieLength", "seriesLength", "totalSeriesLength", "genres.name", "countries.name", "poster.url", "backdrop.url", "logo.url", "ticketsOnSale", "videos.trailers.url", "videos.trailers.site", "videos.trailers.name", "networks.items.name", "networks.items.logo.url", "persons.id", "persons.name", "persons.enName", "persons.photo", "persons.description", "persons.profession", "persons.enProfession", "facts.type", "facts.value", "facts.spoiler", "fees.world.value", "fees.usa.value", "fees.russia.value", "premiere.world", "premiere.usa", "premiere.russia", "premiere.digital", "premiere.dvd", "premiere.bluRay", "premiere.cinema", "premiere.country", "similarMovies.id", "similarMovies.name", "similarMovies.enName", "similarMovies.alternativeName", "similarMovies.poster.url", "similarMovies.rating.kp", "similarMovies.rating.imdb", "similarMovies.rating.tmdb", "similarMovies.year", "sequelsAndPrequels.id", "sequelsAndPrequels.name", "sequelsAndPrequels.enName", "sequelsAndPrequels.alternativeName", "sequelsAndPrequels.poster.url", "sequelsAndPrequels.rating.kp", "sequelsAndPrequels.rating.imdb", "sequelsAndPrequels.rating.tmdb", "sequelsAndPrequels.year", "watchability.items.name", "watchability.items.url", "watchability.items.logo.url", "lists", "top10", "top250", "updatedAt", "createdAt"];
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Список полей которые не должны быть null или пусты";
                };
                readonly id: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по ID KinoPoisk (пример: `\"666\", \"555\", \"!666\"`)";
                };
                readonly "externalId.imdb": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по IMDB ID (пример: `\"tt666\", \"tt555\", \"!tt666\"`)";
                };
                readonly "externalId.tmdb": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "number";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по TMDB ID (пример: `666, 555, !666`)";
                };
                readonly "externalId.kpHD": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по id KinoPoisk HD (пример: `\"48e8d0acb0f62d8585101798eaeceec5\", \"!48e8d0acb0f62d8585101798eaeceec5\"`)";
                };
                readonly type: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly enum: readonly ["movie", "tv-series", "cartoon", "animated-series", "anime"];
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по типу фильма (пример: `\"movie\", \"tv-series\", \"!anime\"`)";
                };
                readonly typeNumber: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по номеру типа фильма (пример: `1, 2, !3`). Список типов: 1 (movie), 2 (tv-series), 3 (cartoon), 4 (anime), 5 (animated-series).";
                };
                readonly isSeries: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по индикатору сериала (пример: `true, false`)";
                };
                readonly status: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly enum: readonly ["announced", "completed", "filming", "post-production", "pre-production"];
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по статусу фильма (пример: `\"announced\", \"completed\", \"!filming\"`)";
                };
                readonly year: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по году (пример: `1874, 2050, !2020, 2020-2024`)";
                };
                readonly "releaseYears.start": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по года начала релиза (пример: `1874, 2050, !2020, 2020-2024`)";
                };
                readonly "releaseYears.end": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по года окончания релиза (пример: `1874, 2050, !2020, 2020-2024`)";
                };
                readonly "rating.kp": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по рейтингу Кинопоиск (пример: `7, 10, 7.2-10`)";
                };
                readonly "rating.imdb": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по рейтингу IMDB (пример: `7, 10, 7.2-10`)";
                };
                readonly "rating.tmdb": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по рейтингу TMDB (пример: `7, 10, 7.2-10`)";
                };
                readonly ratingMpaa: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по рейтингу MPAA (пример: `\"G\", \"NC-17\", \"!R\"`)";
                };
                readonly ageRating: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по возрастному рейтингу (пример: `12, !18, 12-18`)";
                };
                readonly "votes.kp": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по количеству голосов на KP (пример: `1000-6666666`)";
                };
                readonly "votes.imdb": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по количеству голосов на IMDB (пример: `1000-6666666`)";
                };
                readonly "votes.tmdb": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по количеству голосов на TMDB (пример: `1000-6666666`)";
                };
                readonly "votes.filmCritics": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по количеству голосов кинокритиков (пример: `1000-6666666`)";
                };
                readonly "votes.russianFilmCritics": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по количеству голосов кинокритиков из России (пример: `1000-6666666`)";
                };
                readonly "votes.await": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по количеству голосов ожидания на Кинопоиске (пример: `1000-6666666`)";
                };
                readonly "budget.value": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по бюджету фильма (пример: `1000-6666666`)";
                };
                readonly "audience.count": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по количеству аудитории (пример: `1000-6666666`)";
                };
                readonly movieLength: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по продолжительности фильма (пример: `100-120`)";
                };
                readonly seriesLength: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по всей продолжительности одной серии (пример: `20-60`)";
                };
                readonly totalSeriesLength: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по всей продолжительности сериала (пример: `100-120`)";
                };
                readonly "genres.name": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по жанрам (пример: `\"драма\", \"комедия\", \"!мелодрама\", \"+ужасы\"`)";
                };
                readonly "countries.name": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по странам (пример: `\"США\", \"Россия\", \"!Франция\" , \"+Великобритания\"`)";
                };
                readonly ticketsOnSale: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по наличию билетов в продаже (пример: `true, false`)";
                };
                readonly "networks.items.name": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по сетям производства фильма (пример: `\"HBO\", \"Netflix\", \"!Amazon\"`)";
                };
                readonly "persons.id": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по ID персон (пример: `666, 555, !666`)";
                };
                readonly "persons.profession": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по профессиям персон (пример: `\"актер\", \"режиссер\", \"!сценарист\"`)";
                };
                readonly "persons.enProfession": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по английским профессиям персон (пример: `\"actor\", \"director\", \"!writer\"`)";
                };
                readonly "fees.world": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по сборам в мире (пример: `1000-6666666`)";
                };
                readonly "fees.usa": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по сборам в США (пример: `1000-6666666`)";
                };
                readonly "fees.russia": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по сборам в России (пример: `1000-6666666`)";
                };
                readonly "premiere.world": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по дате премьеры в мире (пример: `01.01.2020, 01.01.2020-31.12.2020`)";
                };
                readonly "premiere.usa": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по дате премьеры в США (пример: `01.01.2020, 01.01.2020-31.12.2020`)";
                };
                readonly "premiere.russia": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по дате премьеры в России (пример: `01.01.2020, 01.01.2020-31.12.2020`)";
                };
                readonly "premiere.digital": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по дате премьеры в стриминговых сервисах (пример: `01.01.2020, 01.01.2020-31.12.2020`)";
                };
                readonly "premiere.cinema": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по дате премьеры в кинотеатрах (пример: `01.01.2020, 01.01.2020-31.12.2020`)";
                };
                readonly "premiere.country": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по стране премьеры (пример: `\"США\", \"Россия\", \"!Франция\" , \"+Великобритания\"`)";
                };
                readonly "similarMovies.id": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по ID KinoPoisk из списка похожих фильмов (пример: `666, 555, !666`)";
                };
                readonly "sequelsAndPrequels.id": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по ID KinoPoisk из списка сиквелов и преквелов (пример: `666, 555, !666`)";
                };
                readonly "watchability.items.name": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по доуступным платформам для просмотра (пример: `\"ivi\", \"okko\", \"!megogo\"`)";
                };
                readonly lists: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по коллекциям из KinoPoisk (пример: `\"top250\", \"top-100-indian-movies\", \"!top-100-movies\"`)";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly description: "Id фильма с кинопоиска";
                    readonly examples: readonly [666];
                };
                readonly externalId: {
                    readonly type: "object";
                    readonly properties: {
                        readonly kpHD: {
                            readonly type: "string";
                            readonly description: "ID из kinopoisk HD";
                            readonly examples: readonly ["48e8d0acb0f62d8585101798eaeceec5"];
                        };
                        readonly imdb: {
                            readonly type: "string";
                            readonly examples: readonly ["tt0232500"];
                        };
                        readonly tmdb: {
                            readonly type: "number";
                            readonly examples: readonly [9799];
                        };
                    };
                };
                readonly name: {
                    readonly type: "string";
                    readonly examples: readonly ["Человек паук"];
                };
                readonly alternativeName: {
                    readonly type: "string";
                    readonly examples: readonly ["Spider man"];
                };
                readonly enName: {
                    readonly type: "string";
                    readonly examples: readonly ["Spider man"];
                };
                readonly names: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly name: {
                                readonly type: "string";
                            };
                            readonly language: {
                                readonly type: "string";
                            };
                            readonly type: {
                                readonly type: "string";
                            };
                        };
                    };
                };
                readonly type: {
                    readonly type: "string";
                    readonly description: "Тип тайтла. Доступны: movie | tv-series | cartoon | anime | animated-series | tv-show";
                    readonly examples: readonly ["movie"];
                };
                readonly typeNumber: {
                    readonly type: "number";
                    readonly description: "Тип тайтла в числовом обозначении. Доступны: 1 (movie) | 2 (tv-series) | 3 (cartoon) | 4 (anime) | 5 (animated-series) | 6 (tv-show)";
                    readonly examples: readonly [1];
                };
                readonly year: {
                    readonly type: "number";
                    readonly description: "Год премьеры. При поиске по этому полю, можно использовать интервалы 1860-2030";
                    readonly examples: readonly [2023];
                };
                readonly description: {
                    readonly type: "string";
                    readonly description: "Описание тайтла";
                };
                readonly shortDescription: {
                    readonly type: "string";
                    readonly description: "Сокращенное описание";
                };
                readonly slogan: {
                    readonly type: "string";
                    readonly description: "Слоган";
                };
                readonly status: {
                    readonly type: "string";
                    readonly description: "Статус релиза тайтла. Доступные значения: filming | pre-production | completed | announced | post-production";
                    readonly examples: readonly ["completed"];
                };
                readonly rating: {
                    readonly type: "object";
                    readonly properties: {
                        readonly kp: {
                            readonly type: "number";
                            readonly description: "Рейтинг кинопоиска";
                            readonly examples: readonly [6.2];
                        };
                        readonly imdb: {
                            readonly type: "number";
                            readonly description: "Рейтинг IMDB";
                            readonly examples: readonly [8.4];
                        };
                        readonly tmdb: {
                            readonly type: "number";
                            readonly description: "Рейтинг TMDB";
                            readonly examples: readonly [3.2];
                        };
                        readonly filmCritics: {
                            readonly type: "number";
                            readonly description: "Рейтинг кинокритиков";
                            readonly examples: readonly [10];
                        };
                        readonly russianFilmCritics: {
                            readonly type: "number";
                            readonly description: "Рейтинг кинокритиков из РФ";
                            readonly examples: readonly [5.1];
                        };
                        readonly await: {
                            readonly type: "number";
                            readonly description: "Рейтинг основанный на ожиданиях пользователей";
                            readonly examples: readonly [6.1];
                        };
                    };
                };
                readonly votes: {
                    readonly type: "object";
                    readonly properties: {
                        readonly kp: {
                            readonly type: "string";
                            readonly examples: readonly [60000];
                        };
                        readonly imdb: {
                            readonly type: "number";
                            readonly examples: readonly [50000];
                        };
                        readonly tmdb: {
                            readonly type: "number";
                            readonly examples: readonly [10000];
                        };
                        readonly filmCritics: {
                            readonly type: "number";
                            readonly description: "Количество голосов кинокритиков";
                            readonly examples: readonly [10000];
                        };
                        readonly russianFilmCritics: {
                            readonly type: "number";
                            readonly description: "Количество голосов кинокритиков из РФ";
                            readonly examples: readonly [4000];
                        };
                        readonly await: {
                            readonly type: "number";
                            readonly description: "Количество ожидающих выхода";
                            readonly examples: readonly [34000];
                        };
                    };
                };
                readonly movieLength: {
                    readonly type: "number";
                    readonly description: "Продолжительность фильма";
                    readonly examples: readonly [120];
                };
                readonly ratingMpaa: {
                    readonly type: "string";
                    readonly description: "Возрастной рейтинг по MPAA";
                    readonly examples: readonly ["pg13"];
                };
                readonly ageRating: {
                    readonly type: "number";
                    readonly description: "Возрастной рейтинг";
                    readonly examples: readonly ["16"];
                };
                readonly logo: {
                    readonly type: "object";
                    readonly properties: {
                        readonly url: {
                            readonly type: "string";
                            readonly description: "Чтобы найти фильмы с этим полем, используйте: `!null`";
                        };
                    };
                };
                readonly poster: {
                    readonly type: "object";
                    readonly properties: {
                        readonly url: {
                            readonly type: "string";
                            readonly description: "Чтобы найти фильмы с этим полем, используйте: `!null`";
                        };
                        readonly previewUrl: {
                            readonly type: "string";
                            readonly description: "Чтобы найти фильмы с этим полем, используйте: `!null`";
                        };
                    };
                };
                readonly backdrop: {
                    readonly type: "object";
                    readonly properties: {
                        readonly url: {
                            readonly type: "string";
                            readonly description: "Чтобы найти фильмы с этим полем, используйте: `!null`";
                        };
                        readonly previewUrl: {
                            readonly type: "string";
                            readonly description: "Чтобы найти фильмы с этим полем, используйте: `!null`";
                        };
                    };
                };
                readonly videos: {
                    readonly type: "object";
                    readonly properties: {
                        readonly trailers: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly url: {
                                        readonly type: "string";
                                        readonly description: "Url трейлера";
                                        readonly examples: readonly ["https://www.youtube.com/embed/ZsJz2TJAPjw"];
                                    };
                                    readonly name: {
                                        readonly type: "string";
                                        readonly examples: readonly ["Official Trailer"];
                                    };
                                    readonly site: {
                                        readonly type: "string";
                                        readonly examples: readonly ["youtube"];
                                    };
                                    readonly type: {
                                        readonly type: "string";
                                        readonly examples: readonly ["TRAILER"];
                                    };
                                    readonly size: {
                                        readonly type: "number";
                                    };
                                };
                                readonly required: readonly ["size"];
                            };
                        };
                        readonly teasers: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly url: {
                                        readonly type: "string";
                                        readonly description: "Url трейлера";
                                        readonly examples: readonly ["https://www.youtube.com/embed/ZsJz2TJAPjw"];
                                    };
                                    readonly name: {
                                        readonly type: "string";
                                        readonly examples: readonly ["Official Trailer"];
                                    };
                                    readonly site: {
                                        readonly type: "string";
                                        readonly examples: readonly ["youtube"];
                                    };
                                    readonly type: {
                                        readonly type: "string";
                                        readonly examples: readonly ["TRAILER"];
                                    };
                                    readonly size: {
                                        readonly type: "number";
                                    };
                                };
                                readonly required: readonly ["size"];
                            };
                        };
                    };
                    readonly required: readonly ["teasers"];
                };
                readonly genres: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly name: {
                                readonly type: "string";
                            };
                        };
                    };
                };
                readonly countries: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly name: {
                                readonly type: "string";
                            };
                        };
                    };
                };
                readonly persons: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "number";
                                readonly description: "Id персоны с кинопоиска";
                                readonly examples: readonly [6317];
                            };
                            readonly photo: {
                                readonly type: "string";
                                readonly examples: readonly ["https://st.kp.yandex.net/images/actor_iphone/iphone360_6317.jpg"];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly examples: readonly ["Пол Уокер"];
                            };
                            readonly enName: {
                                readonly type: "string";
                                readonly examples: readonly ["Paul Walker"];
                            };
                            readonly description: {
                                readonly type: "string";
                            };
                            readonly profession: {
                                readonly type: "string";
                            };
                            readonly enProfession: {
                                readonly type: "string";
                            };
                        };
                        readonly required: readonly ["description", "profession", "enProfession"];
                    };
                };
                readonly reviewInfo: {
                    readonly type: "object";
                    readonly properties: {
                        readonly count: {
                            readonly type: "number";
                        };
                        readonly positiveCount: {
                            readonly type: "number";
                        };
                        readonly percentage: {
                            readonly type: "string";
                        };
                    };
                };
                readonly seasonsInfo: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly number: {
                                readonly type: "number";
                            };
                            readonly episodesCount: {
                                readonly type: "number";
                            };
                        };
                    };
                };
                readonly budget: {
                    readonly type: "object";
                    readonly properties: {
                        readonly value: {
                            readonly type: "number";
                            readonly description: "Сумма";
                            readonly examples: readonly [207283];
                        };
                        readonly currency: {
                            readonly type: "string";
                            readonly description: "Валюта";
                            readonly examples: readonly ["€"];
                        };
                    };
                };
                readonly fees: {
                    readonly type: "object";
                    readonly properties: {
                        readonly world: {
                            readonly type: "object";
                            readonly properties: {
                                readonly value: {
                                    readonly type: "number";
                                    readonly description: "Сумма";
                                    readonly examples: readonly [207283];
                                };
                                readonly currency: {
                                    readonly type: "string";
                                    readonly description: "Валюта";
                                    readonly examples: readonly ["€"];
                                };
                            };
                        };
                        readonly russia: {
                            readonly type: "object";
                            readonly properties: {
                                readonly value: {
                                    readonly type: "number";
                                    readonly description: "Сумма";
                                    readonly examples: readonly [207283];
                                };
                                readonly currency: {
                                    readonly type: "string";
                                    readonly description: "Валюта";
                                    readonly examples: readonly ["€"];
                                };
                            };
                        };
                        readonly usa: {
                            readonly type: "object";
                            readonly properties: {
                                readonly value: {
                                    readonly type: "number";
                                    readonly description: "Сумма";
                                    readonly examples: readonly [207283];
                                };
                                readonly currency: {
                                    readonly type: "string";
                                    readonly description: "Валюта";
                                    readonly examples: readonly ["€"];
                                };
                            };
                        };
                    };
                };
                readonly premiere: {
                    readonly type: "object";
                    readonly properties: {
                        readonly country: {
                            readonly type: "string";
                            readonly examples: readonly ["США"];
                        };
                        readonly world: {
                            readonly format: "date-time";
                            readonly type: "string";
                            readonly description: "Для более релевантного поиска, используйте интервал дат 01.02.2022-01.02.2023";
                            readonly examples: readonly ["2023-02-25T02:44:39.359Z"];
                        };
                        readonly russia: {
                            readonly format: "date-time";
                            readonly type: "string";
                            readonly description: "Для более релевантного поиска, используйте интервал дат 01.02.2022-01.02.2023";
                            readonly examples: readonly ["2023-02-25T02:44:39.359Z"];
                        };
                        readonly digital: {
                            readonly type: "string";
                        };
                        readonly cinema: {
                            readonly format: "date-time";
                            readonly type: "string";
                            readonly description: "Для более релевантного поиска, используйте интервал дат 01.02.2022-01.02.2023";
                            readonly examples: readonly ["2023-02-25T02:44:39.359Z"];
                        };
                        readonly bluray: {
                            readonly type: "string";
                        };
                        readonly dvd: {
                            readonly type: "string";
                        };
                    };
                    readonly required: readonly ["bluray", "dvd"];
                };
                readonly similarMovies: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "number";
                            };
                            readonly rating: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly kp: {
                                        readonly type: "number";
                                        readonly description: "Рейтинг кинопоиска";
                                        readonly examples: readonly [6.2];
                                    };
                                    readonly imdb: {
                                        readonly type: "number";
                                        readonly description: "Рейтинг IMDB";
                                        readonly examples: readonly [8.4];
                                    };
                                    readonly tmdb: {
                                        readonly type: "number";
                                        readonly description: "Рейтинг TMDB";
                                        readonly examples: readonly [3.2];
                                    };
                                    readonly filmCritics: {
                                        readonly type: "number";
                                        readonly description: "Рейтинг кинокритиков";
                                        readonly examples: readonly [10];
                                    };
                                    readonly russianFilmCritics: {
                                        readonly type: "number";
                                        readonly description: "Рейтинг кинокритиков из РФ";
                                        readonly examples: readonly [5.1];
                                    };
                                    readonly await: {
                                        readonly type: "number";
                                        readonly description: "Рейтинг основанный на ожиданиях пользователей";
                                        readonly examples: readonly [6.1];
                                    };
                                };
                            };
                            readonly year: {
                                readonly type: "number";
                                readonly examples: readonly [2021];
                            };
                            readonly name: {
                                readonly type: "string";
                            };
                            readonly enName: {
                                readonly type: "string";
                            };
                            readonly alternativeName: {
                                readonly type: "string";
                            };
                            readonly type: {
                                readonly type: "string";
                            };
                            readonly poster: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly url: {
                                        readonly type: "string";
                                        readonly description: "Чтобы найти фильмы с этим полем, используйте: `!null`";
                                    };
                                    readonly previewUrl: {
                                        readonly type: "string";
                                        readonly description: "Чтобы найти фильмы с этим полем, используйте: `!null`";
                                    };
                                };
                            };
                        };
                        readonly required: readonly ["rating", "year", "name", "enName", "alternativeName", "poster"];
                    };
                };
                readonly sequelsAndPrequels: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "number";
                            };
                            readonly rating: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly kp: {
                                        readonly type: "number";
                                        readonly description: "Рейтинг кинопоиска";
                                        readonly examples: readonly [6.2];
                                    };
                                    readonly imdb: {
                                        readonly type: "number";
                                        readonly description: "Рейтинг IMDB";
                                        readonly examples: readonly [8.4];
                                    };
                                    readonly tmdb: {
                                        readonly type: "number";
                                        readonly description: "Рейтинг TMDB";
                                        readonly examples: readonly [3.2];
                                    };
                                    readonly filmCritics: {
                                        readonly type: "number";
                                        readonly description: "Рейтинг кинокритиков";
                                        readonly examples: readonly [10];
                                    };
                                    readonly russianFilmCritics: {
                                        readonly type: "number";
                                        readonly description: "Рейтинг кинокритиков из РФ";
                                        readonly examples: readonly [5.1];
                                    };
                                    readonly await: {
                                        readonly type: "number";
                                        readonly description: "Рейтинг основанный на ожиданиях пользователей";
                                        readonly examples: readonly [6.1];
                                    };
                                };
                            };
                            readonly year: {
                                readonly type: "number";
                                readonly examples: readonly [2021];
                            };
                            readonly name: {
                                readonly type: "string";
                            };
                            readonly enName: {
                                readonly type: "string";
                            };
                            readonly alternativeName: {
                                readonly type: "string";
                            };
                            readonly type: {
                                readonly type: "string";
                            };
                            readonly poster: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly url: {
                                        readonly type: "string";
                                        readonly description: "Чтобы найти фильмы с этим полем, используйте: `!null`";
                                    };
                                    readonly previewUrl: {
                                        readonly type: "string";
                                        readonly description: "Чтобы найти фильмы с этим полем, используйте: `!null`";
                                    };
                                };
                            };
                        };
                        readonly required: readonly ["rating", "year", "name", "enName", "alternativeName", "poster"];
                    };
                };
                readonly watchability: {
                    readonly type: "object";
                    readonly properties: {
                        readonly items: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly name: {
                                        readonly type: "string";
                                    };
                                    readonly logo: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly url: {
                                                readonly type: "string";
                                                readonly description: "Чтобы найти фильмы с этим полем, используйте: `!null`";
                                            };
                                        };
                                    };
                                    readonly url: {
                                        readonly type: "string";
                                    };
                                };
                                readonly required: readonly ["logo", "url"];
                            };
                        };
                    };
                };
                readonly releaseYears: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly start: {
                                readonly type: "number";
                                readonly description: "Год начала";
                                readonly examples: readonly [2022];
                            };
                            readonly end: {
                                readonly type: "number";
                                readonly description: "Год окончания";
                                readonly examples: readonly [2023];
                            };
                        };
                    };
                };
                readonly top10: {
                    readonly type: "number";
                    readonly description: "Позиция тайтла в топ 10. Чтобы найти фильмы участвующие в рейтинге используйте: `!null`";
                    readonly examples: readonly [1];
                };
                readonly top250: {
                    readonly type: "number";
                    readonly description: "Позиция тайтла в топ 250. Чтобы найти фильмы участвующие в рейтинге используйте: `!null`";
                    readonly examples: readonly [200];
                };
                readonly ticketsOnSale: {
                    readonly type: "boolean";
                    readonly description: "Признак того, что тайтл находится в прокате";
                    readonly examples: readonly [true];
                };
                readonly totalSeriesLength: {
                    readonly type: "number";
                    readonly description: "Продолжительность всех серий";
                    readonly examples: readonly [155];
                };
                readonly seriesLength: {
                    readonly type: "number";
                    readonly description: "Средняя продолжительность серии";
                    readonly examples: readonly [20];
                };
                readonly isSeries: {
                    readonly type: "boolean";
                    readonly description: "Признак сериала";
                    readonly examples: readonly [true];
                };
                readonly audience: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly count: {
                                readonly type: "number";
                                readonly description: "Количество просмотров в кино";
                                readonly examples: readonly [1000];
                            };
                            readonly country: {
                                readonly type: "string";
                                readonly description: "Страна в которой проходил показ";
                                readonly examples: readonly ["Россия"];
                            };
                        };
                        readonly required: readonly ["count", "country"];
                    };
                };
                readonly lists: {
                    readonly description: "Список коллекций, в которых находится тайтл.";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly examples: readonly ["250 лучших сериалов"];
                };
                readonly networks: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly items: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly name: {
                                            readonly type: "string";
                                            readonly examples: readonly ["Netflix"];
                                        };
                                        readonly logo: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly url: {
                                                    readonly type: "string";
                                                    readonly description: "Чтобы найти фильмы с этим полем, используйте: `!null`";
                                                };
                                            };
                                        };
                                    };
                                    readonly required: readonly ["name", "logo"];
                                };
                            };
                        };
                        readonly required: readonly ["items"];
                    };
                };
                readonly updatedAt: {
                    readonly format: "date-time";
                    readonly type: "string";
                };
                readonly createdAt: {
                    readonly format: "date-time";
                    readonly type: "string";
                };
                readonly facts: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly value: {
                                readonly type: "string";
                            };
                            readonly type: {
                                readonly type: "string";
                            };
                            readonly spoiler: {
                                readonly type: "boolean";
                            };
                        };
                        readonly required: readonly ["value", "type", "spoiler"];
                    };
                };
                readonly imagesInfo: {
                    readonly type: "object";
                    readonly properties: {
                        readonly postersCount: {
                            readonly type: "number";
                        };
                        readonly backdropsCount: {
                            readonly type: "number";
                        };
                        readonly framesCount: {
                            readonly type: "number";
                        };
                    };
                    readonly required: readonly ["postersCount", "backdropsCount", "framesCount"];
                };
            };
            readonly required: readonly ["id", "externalId", "names", "type", "typeNumber", "isSeries", "networks", "updatedAt", "createdAt", "facts", "imagesInfo"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const MovieControllerSearchMovieV14: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly page: {
                    readonly minimum: 1;
                    readonly default: 1;
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Страница выборки";
                };
                readonly limit: {
                    readonly minimum: 1;
                    readonly maximum: 250;
                    readonly default: 10;
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Количество элементов на странице";
                };
                readonly query: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поисковый запрос";
                };
            };
            readonly required: readonly ["query"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly docs: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "number";
                            };
                            readonly name: {
                                readonly type: "string";
                            };
                            readonly alternativeName: {
                                readonly type: "string";
                            };
                            readonly enName: {
                                readonly type: "string";
                            };
                            readonly type: {
                                readonly type: "string";
                            };
                            readonly year: {
                                readonly type: "number";
                            };
                            readonly description: {
                                readonly type: "string";
                            };
                            readonly shortDescription: {
                                readonly type: "string";
                            };
                            readonly movieLength: {
                                readonly type: "number";
                            };
                            readonly names: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly name: {
                                            readonly type: "string";
                                        };
                                        readonly language: {
                                            readonly type: "string";
                                        };
                                        readonly type: {
                                            readonly type: "string";
                                        };
                                    };
                                };
                            };
                            readonly externalId: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly kpHD: {
                                        readonly type: "string";
                                        readonly description: "ID из kinopoisk HD";
                                        readonly examples: readonly ["48e8d0acb0f62d8585101798eaeceec5"];
                                    };
                                    readonly imdb: {
                                        readonly type: "string";
                                        readonly examples: readonly ["tt0232500"];
                                    };
                                    readonly tmdb: {
                                        readonly type: "number";
                                        readonly examples: readonly [9799];
                                    };
                                };
                            };
                            readonly logo: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly url: {
                                        readonly type: "string";
                                        readonly description: "Чтобы найти фильмы с этим полем, используйте: `!null`";
                                    };
                                };
                            };
                            readonly poster: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly url: {
                                        readonly type: "string";
                                        readonly description: "Чтобы найти фильмы с этим полем, используйте: `!null`";
                                    };
                                    readonly previewUrl: {
                                        readonly type: "string";
                                        readonly description: "Чтобы найти фильмы с этим полем, используйте: `!null`";
                                    };
                                };
                            };
                            readonly backdrop: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly url: {
                                        readonly type: "string";
                                        readonly description: "Чтобы найти фильмы с этим полем, используйте: `!null`";
                                    };
                                    readonly previewUrl: {
                                        readonly type: "string";
                                        readonly description: "Чтобы найти фильмы с этим полем, используйте: `!null`";
                                    };
                                };
                            };
                            readonly rating: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly kp: {
                                        readonly type: "number";
                                        readonly description: "Рейтинг кинопоиска";
                                        readonly examples: readonly [6.2];
                                    };
                                    readonly imdb: {
                                        readonly type: "number";
                                        readonly description: "Рейтинг IMDB";
                                        readonly examples: readonly [8.4];
                                    };
                                    readonly tmdb: {
                                        readonly type: "number";
                                        readonly description: "Рейтинг TMDB";
                                        readonly examples: readonly [3.2];
                                    };
                                    readonly filmCritics: {
                                        readonly type: "number";
                                        readonly description: "Рейтинг кинокритиков";
                                        readonly examples: readonly [10];
                                    };
                                    readonly russianFilmCritics: {
                                        readonly type: "number";
                                        readonly description: "Рейтинг кинокритиков из РФ";
                                        readonly examples: readonly [5.1];
                                    };
                                    readonly await: {
                                        readonly type: "number";
                                        readonly description: "Рейтинг основанный на ожиданиях пользователей";
                                        readonly examples: readonly [6.1];
                                    };
                                };
                            };
                            readonly votes: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly kp: {
                                        readonly type: "string";
                                        readonly examples: readonly [60000];
                                    };
                                    readonly imdb: {
                                        readonly type: "number";
                                        readonly examples: readonly [50000];
                                    };
                                    readonly tmdb: {
                                        readonly type: "number";
                                        readonly examples: readonly [10000];
                                    };
                                    readonly filmCritics: {
                                        readonly type: "number";
                                        readonly description: "Количество голосов кинокритиков";
                                        readonly examples: readonly [10000];
                                    };
                                    readonly russianFilmCritics: {
                                        readonly type: "number";
                                        readonly description: "Количество голосов кинокритиков из РФ";
                                        readonly examples: readonly [4000];
                                    };
                                    readonly await: {
                                        readonly type: "number";
                                        readonly description: "Количество ожидающих выхода";
                                        readonly examples: readonly [34000];
                                    };
                                };
                            };
                            readonly genres: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly name: {
                                            readonly type: "string";
                                        };
                                    };
                                };
                            };
                            readonly countries: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly name: {
                                            readonly type: "string";
                                        };
                                    };
                                };
                            };
                            readonly releaseYears: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly start: {
                                            readonly type: "number";
                                            readonly description: "Год начала";
                                            readonly examples: readonly [2022];
                                        };
                                        readonly end: {
                                            readonly type: "number";
                                            readonly description: "Год окончания";
                                            readonly examples: readonly [2023];
                                        };
                                    };
                                };
                            };
                            readonly isSeries: {
                                readonly type: "boolean";
                            };
                            readonly ticketsOnSale: {
                                readonly type: "boolean";
                            };
                            readonly totalSeriesLength: {
                                readonly type: "number";
                            };
                            readonly seriesLength: {
                                readonly type: "number";
                            };
                            readonly ratingMpaa: {
                                readonly type: "string";
                            };
                            readonly ageRating: {
                                readonly type: "number";
                            };
                            readonly top10: {
                                readonly type: "number";
                            };
                            readonly top250: {
                                readonly type: "number";
                            };
                            readonly typeNumber: {
                                readonly type: "number";
                            };
                            readonly status: {
                                readonly type: "string";
                            };
                            readonly internalNames: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "string";
                                };
                            };
                            readonly internalRating: {
                                readonly type: "number";
                            };
                            readonly internalVotes: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["id", "name", "alternativeName", "enName", "type", "year", "description", "shortDescription", "movieLength", "names", "isSeries", "ticketsOnSale", "totalSeriesLength", "seriesLength", "ratingMpaa", "ageRating", "typeNumber", "status", "internalNames", "internalRating", "internalVotes"];
                    };
                };
                readonly total: {
                    readonly type: "number";
                    readonly description: "Общее количество результатов";
                };
                readonly limit: {
                    readonly type: "number";
                    readonly description: "Количество результатов на странице";
                };
                readonly page: {
                    readonly type: "number";
                    readonly description: "Текущая страница";
                };
                readonly pages: {
                    readonly type: "number";
                    readonly description: "Сколько страниц всего";
                };
            };
            readonly required: readonly ["docs", "total", "limit", "page", "pages"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PersonControllerFindManyAwardsV14: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly page: {
                    readonly minimum: 1;
                    readonly default: 1;
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Номер страницы";
                };
                readonly limit: {
                    readonly minimum: 1;
                    readonly maximum: 250;
                    readonly default: 10;
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Количество элементов на странице";
                };
                readonly selectFields: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly enum: readonly ["personId", "winning", "nomination", "updatedAt", "createdAt"];
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Список полей требуемых в ответе из модели";
                };
                readonly notNullFields: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly enum: readonly ["personId", "winning", "nomination.award.title", "nomination.award.year", "nomination.title", "updatedAt", "createdAt"];
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Список полей которые не должны быть null или пусты";
                };
                readonly sortField: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly enum: readonly ["personId", "winning", "nomination.award.title", "nomination.award.year", "nomination.title", "updatedAt", "createdAt"];
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Сортировка по полям из модели";
                };
                readonly sortType: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Тип сортировки применительно к полям из sortField (пример: `\"1\", \"-1\"`)";
                };
                readonly personId: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по ID персоны (пример: `\"666\", \"555\", \"!666\"`)";
                };
                readonly "nomination.title": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по номинациям (пример: `\"Оскар\", \"Золотой глобус\"`)";
                };
                readonly "nomination.award.title": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по наградам (пример: `\"Лучший фильм\", \"Лучший актер\"`)";
                };
                readonly "nomination.award.year": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по году награды (пример: `\"2019\", \"2020\"`)";
                };
                readonly winning: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по победам (пример: `\"true\", \"false\"`)";
                };
                readonly updatedAt: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по дате обновления в базе (пример: `01.01.2020, 01.01.2020-31.12.2020`)";
                };
                readonly createdAt: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по дате добавления в базу (пример: `01.01.2020, 01.01.2020-31.12.2020`)";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly docs: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly nomination: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly award: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly title: {
                                                readonly type: "string";
                                            };
                                            readonly year: {
                                                readonly type: "number";
                                            };
                                        };
                                        readonly required: readonly ["title", "year"];
                                    };
                                    readonly title: {
                                        readonly type: "string";
                                    };
                                };
                                readonly required: readonly ["award", "title"];
                            };
                            readonly winning: {
                                readonly type: "boolean";
                            };
                            readonly updatedAt: {
                                readonly format: "date-time";
                                readonly type: "string";
                            };
                            readonly createdAt: {
                                readonly format: "date-time";
                                readonly type: "string";
                            };
                            readonly personId: {
                                readonly type: "number";
                            };
                            readonly movie: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly id: {
                                        readonly type: "number";
                                    };
                                    readonly name: {
                                        readonly type: "string";
                                    };
                                    readonly rating: {
                                        readonly type: "number";
                                    };
                                };
                                readonly required: readonly ["id", "name", "rating"];
                            };
                        };
                        readonly required: readonly ["nomination", "winning", "updatedAt", "createdAt", "personId", "movie"];
                    };
                };
                readonly total: {
                    readonly type: "number";
                    readonly description: "Общее количество результатов";
                };
                readonly limit: {
                    readonly type: "number";
                    readonly description: "Количество результатов на странице";
                };
                readonly page: {
                    readonly type: "number";
                    readonly description: "Текущая страница";
                };
                readonly pages: {
                    readonly type: "number";
                    readonly description: "Сколько страниц всего";
                };
            };
            readonly required: readonly ["docs", "total", "limit", "page", "pages"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PersonControllerFindManyV14: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly page: {
                    readonly minimum: 1;
                    readonly default: 1;
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Номер страницы";
                };
                readonly limit: {
                    readonly minimum: 1;
                    readonly maximum: 250;
                    readonly default: 10;
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Количество элементов на странице";
                };
                readonly selectFields: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly enum: readonly ["id", "name", "enName", "photo", "sex", "growth", "birthday", "death", "age", "birthPlace", "deathPlace", "spouses", "countAwards", "profession", "facts", "movies", "updatedAt", "createdAt"];
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Список полей требуемых в ответе из модели";
                };
                readonly notNullFields: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly enum: readonly ["id", "name", "enName", "photo", "sex", "growth", "birthday", "death", "age", "birthPlace.value", "deathPlace.value", "spouses.id", "spouses.name", "spouses.divorced", "spouses.divorcedReason", "spouses.sex", "spouses.children", "spouses.relation", "countAwards", "profession.value", "facts.value", "movies.id", "movies.name", "movies.alternativeName", "movies.rating", "movies.general", "movies.description", "movies.enProfession", "updatedAt", "createdAt"];
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Список полей которые не должны быть null или пусты";
                };
                readonly sortField: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly enum: readonly ["id", "name", "enName", "photo", "sex", "growth", "birthday", "death", "age", "birthPlace.value", "deathPlace.value", "spouses.id", "spouses.name", "spouses.divorced", "spouses.divorcedReason", "spouses.sex", "spouses.children", "spouses.relation", "countAwards", "profession.value", "facts.value", "movies.id", "movies.name", "movies.alternativeName", "movies.rating", "movies.general", "movies.description", "movies.enProfession", "updatedAt", "createdAt"];
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Сортировка по полям из модели";
                };
                readonly sortType: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Тип сортировки применительно к полям из sortField (пример: `\"1\", \"-1\"`)";
                };
                readonly id: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по ID KinoPoisk (пример: `\"111\", \"222\", \"!666\"`)";
                };
                readonly "movies.id": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по ID фильма (пример: `\"666\", \"555\", \"!666\"`)";
                };
                readonly sex: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly enum: readonly ["Женский", "Мужской"];
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по гендеру (пример: `Женский, Мужской`)";
                };
                readonly growth: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по росту (пример: `170-180, 180`)";
                };
                readonly birthday: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по дате рождения (пример: `01.01.2000-01.01.2001, 01.01.2000`)";
                };
                readonly death: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по дате смерти (пример: `01.01.2000-01.01.2001, 01.01.2000`)";
                };
                readonly age: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по возрасту (пример: `18-25, 25`)";
                };
                readonly "birthPlace.value": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по месту рождения (пример: `Москва, Санкт-Петербург`)";
                };
                readonly "deathPlace.value": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по месту смерти (пример: `Москва, Санкт-Петербург`)";
                };
                readonly "spouses.id": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по ID супруги(супруга) (пример: `111, 222`)";
                };
                readonly "spouses.divorced": {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по статусу развода (пример: `true, false`)";
                };
                readonly "spouses.sex": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly enum: readonly ["Женский", "Мужской"];
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по гендеру супруги(супруга) (пример: `Женский, Мужской`)";
                };
                readonly countAwards: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по количеству наград (пример: `1-10, 10`)";
                };
                readonly "profession.value": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly enum: readonly ["Актер", "Актер дубляжа", "Актриса", "Актриса дубляжа", "В титрах не указаны", "Группа: Хроника", "Группа: играют самих себя", "Директор фильма", "Звукорежиссер", "Композитор", "Монтажер", "Озвучка", "Оператор", "Переводчик", "Продюсер", "Режиссер", "Режиссер дубляжа", "Сценарист", "Художник"];
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по профессии (пример: `Актер, Режиссер`)";
                };
                readonly "movies.rating": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по рейтингу фильма (пример: `1-10, 10`)";
                };
                readonly "movies.enProfession": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly enum: readonly ["actor", "cameo", "composer", "design", "director", "director_ussr", "editor", "group_cameo", "group_uncredited", "operator", "producer", "sound_designer", "translator", "uncredited", "voice_director", "voiceover", "writer"];
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по профессии в фильмах на английском (пример: `actor, director`)";
                };
                readonly updatedAt: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по дате обновления в базе (пример: `01.01.2020, 01.01.2020-31.12.2020`)";
                };
                readonly createdAt: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по дате добавления в базу (пример: `01.01.2020, 01.01.2020-31.12.2020`)";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly docs: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "number";
                            };
                            readonly name: {
                                readonly type: "string";
                            };
                            readonly enName: {
                                readonly type: "string";
                            };
                            readonly photo: {
                                readonly type: "string";
                            };
                            readonly sex: {
                                readonly type: "string";
                            };
                            readonly growth: {
                                readonly type: "number";
                            };
                            readonly birthday: {
                                readonly type: "string";
                            };
                            readonly death: {
                                readonly type: "string";
                            };
                            readonly age: {
                                readonly type: "number";
                            };
                            readonly birthPlace: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly value: {
                                            readonly type: "string";
                                        };
                                    };
                                };
                            };
                            readonly deathPlace: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly value: {
                                            readonly type: "string";
                                        };
                                    };
                                };
                            };
                            readonly spouses: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly id: {
                                        readonly type: "number";
                                    };
                                    readonly name: {
                                        readonly type: "string";
                                    };
                                    readonly divorced: {
                                        readonly type: "boolean";
                                    };
                                    readonly divorcedReason: {
                                        readonly type: "string";
                                    };
                                    readonly sex: {
                                        readonly type: "string";
                                    };
                                    readonly children: {
                                        readonly type: "number";
                                    };
                                    readonly relation: {
                                        readonly type: "string";
                                    };
                                };
                            };
                            readonly countAwards: {
                                readonly type: "number";
                            };
                            readonly profession: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly value: {
                                            readonly type: "string";
                                        };
                                    };
                                };
                            };
                            readonly facts: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly value: {
                                            readonly type: "string";
                                        };
                                    };
                                };
                            };
                            readonly movies: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly id: {
                                            readonly type: "number";
                                        };
                                        readonly name: {
                                            readonly type: "string";
                                        };
                                        readonly alternativeName: {
                                            readonly type: "string";
                                        };
                                        readonly rating: {
                                            readonly type: "number";
                                        };
                                        readonly general: {
                                            readonly type: "boolean";
                                        };
                                        readonly description: {
                                            readonly type: "string";
                                        };
                                        readonly enProfession: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly required: readonly ["id"];
                                };
                            };
                            readonly updatedAt: {
                                readonly format: "date-time";
                                readonly type: "string";
                            };
                            readonly createdAt: {
                                readonly format: "date-time";
                                readonly type: "string";
                            };
                        };
                        readonly required: readonly ["id", "updatedAt", "createdAt"];
                    };
                };
                readonly total: {
                    readonly type: "number";
                    readonly description: "Общее количество результатов";
                };
                readonly limit: {
                    readonly type: "number";
                    readonly description: "Количество результатов на странице";
                };
                readonly page: {
                    readonly type: "number";
                    readonly description: "Текущая страница";
                };
                readonly pages: {
                    readonly type: "number";
                    readonly description: "Сколько страниц всего";
                };
            };
            readonly required: readonly ["docs", "total", "limit", "page", "pages"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PersonControllerFindOneV14: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID из кинопоиска";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                };
                readonly name: {
                    readonly type: "string";
                };
                readonly enName: {
                    readonly type: "string";
                };
                readonly photo: {
                    readonly type: "string";
                };
                readonly sex: {
                    readonly type: "string";
                };
                readonly growth: {
                    readonly type: "number";
                };
                readonly birthday: {
                    readonly type: "string";
                };
                readonly death: {
                    readonly type: "string";
                };
                readonly age: {
                    readonly type: "number";
                };
                readonly birthPlace: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly value: {
                                readonly type: "string";
                            };
                        };
                    };
                };
                readonly deathPlace: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly value: {
                                readonly type: "string";
                            };
                        };
                    };
                };
                readonly spouses: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "number";
                        };
                        readonly name: {
                            readonly type: "string";
                        };
                        readonly divorced: {
                            readonly type: "boolean";
                        };
                        readonly divorcedReason: {
                            readonly type: "string";
                        };
                        readonly sex: {
                            readonly type: "string";
                        };
                        readonly children: {
                            readonly type: "number";
                        };
                        readonly relation: {
                            readonly type: "string";
                        };
                    };
                };
                readonly countAwards: {
                    readonly type: "number";
                };
                readonly profession: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly value: {
                                readonly type: "string";
                            };
                        };
                    };
                };
                readonly facts: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly value: {
                                readonly type: "string";
                            };
                        };
                    };
                };
                readonly movies: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "number";
                            };
                            readonly name: {
                                readonly type: "string";
                            };
                            readonly alternativeName: {
                                readonly type: "string";
                            };
                            readonly rating: {
                                readonly type: "number";
                            };
                            readonly general: {
                                readonly type: "boolean";
                            };
                            readonly description: {
                                readonly type: "string";
                            };
                            readonly enProfession: {
                                readonly type: "string";
                            };
                        };
                        readonly required: readonly ["id"];
                    };
                };
                readonly updatedAt: {
                    readonly format: "date-time";
                    readonly type: "string";
                };
                readonly createdAt: {
                    readonly format: "date-time";
                    readonly type: "string";
                };
            };
            readonly required: readonly ["id", "updatedAt", "createdAt"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly statusCode: {
                    readonly type: "number";
                    readonly examples: readonly [401];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["В запросе не указан токен!"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly examples: readonly ["Unauthorized"];
                };
            };
            readonly required: readonly ["statusCode", "message", "error"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly statusCode: {
                    readonly type: "number";
                    readonly examples: readonly [403];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Превышен дневной лимит!"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly examples: readonly ["Forbidden"];
                };
            };
            readonly required: readonly ["statusCode", "message", "error"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly statusCode: {
                    readonly type: "number";
                    readonly examples: readonly [403];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Превышен дневной лимит!"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly examples: readonly ["Forbidden"];
                };
            };
            readonly required: readonly ["statusCode", "message", "error"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly default: {
            readonly type: "object";
            readonly properties: {
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly error: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["statusCode", "message", "error"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PersonControllerSearchPersonV14: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly page: {
                    readonly minimum: 1;
                    readonly default: 1;
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Страница выборки";
                };
                readonly limit: {
                    readonly minimum: 1;
                    readonly maximum: 250;
                    readonly default: 10;
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Количество элементов на странице";
                };
                readonly query: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поисковый запрос";
                };
            };
            readonly required: readonly ["query"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly docs: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly "1": {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                            readonly id: {
                                readonly type: "number";
                            };
                            readonly name: {
                                readonly type: "string";
                            };
                            readonly enName: {
                                readonly type: "string";
                            };
                            readonly photo: {
                                readonly type: "string";
                            };
                            readonly sex: {
                                readonly type: "string";
                            };
                            readonly birthday: {
                                readonly type: "string";
                            };
                            readonly death: {
                                readonly type: "string";
                            };
                            readonly age: {
                                readonly type: "number";
                            };
                            readonly birthPlace: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly value: {
                                            readonly type: "string";
                                        };
                                    };
                                };
                            };
                            readonly deathPlace: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly value: {
                                            readonly type: "string";
                                        };
                                    };
                                };
                            };
                            readonly profession: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly value: {
                                            readonly type: "string";
                                        };
                                    };
                                };
                            };
                            readonly growth: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["id", "name", "enName", "photo", "sex", "1", "birthday", "death", "age", "growth"];
                    };
                };
                readonly total: {
                    readonly type: "number";
                    readonly description: "Общее количество результатов";
                };
                readonly limit: {
                    readonly type: "number";
                    readonly description: "Количество результатов на странице";
                };
                readonly page: {
                    readonly type: "number";
                    readonly description: "Текущая страница";
                };
                readonly pages: {
                    readonly type: "number";
                    readonly description: "Сколько страниц всего";
                };
            };
            readonly required: readonly ["docs", "total", "limit", "page", "pages"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ReviewControllerFindManyV14: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly page: {
                    readonly minimum: 1;
                    readonly default: 1;
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Номер страницы";
                };
                readonly limit: {
                    readonly minimum: 1;
                    readonly maximum: 250;
                    readonly default: 10;
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Количество элементов на странице";
                };
                readonly selectFields: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly enum: readonly ["id", "movieId", "title", "type", "review", "date", "author", "authorId", "updatedAt", "createdAt"];
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Список полей требуемых в ответе из модели";
                };
                readonly notNullFields: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly enum: readonly ["id", "movieId", "title", "type", "review", "date", "author", "authorId", "updatedAt", "createdAt"];
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Список полей которые не должны быть null или пусты";
                };
                readonly sortField: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly enum: readonly ["id", "movieId", "title", "type", "review", "date", "author", "authorId", "updatedAt", "createdAt"];
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Сортировка по полям из модели";
                };
                readonly sortType: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Тип сортировки применительно к полям из sortField (пример: `\"1\", \"-1\"`)";
                };
                readonly id: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по ID отзыва (пример: `\"111\", \"222\", \"!666\"`)";
                };
                readonly movieId: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по ID фильма (пример: `\"666\", \"555\", \"!666\"`)";
                };
                readonly authorId: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск отзывов по ID автора (пример: `\"666\", \"555\", \"!666\"`)";
                };
                readonly author: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по имени автора отзыва (пример: `\"КиноПоиск\", \"!КиноПоиск\"`)";
                };
                readonly type: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly enum: readonly ["Негативный", "Нейтральный", "Позитивный"];
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по типу отзыва (пример: `\"!Негативный\", \"Нейтральный\", \"Позитивный\"`)";
                };
                readonly date: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по дате создания отзыва (пример: `\"01.01.2021-01.01.2022\", \"01.01.2021\"`)";
                };
                readonly updatedAt: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по дате обновления в базе (пример: `01.01.2020, 01.01.2020-31.12.2020`)";
                };
                readonly createdAt: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по дате добавления в базу (пример: `01.01.2020, 01.01.2020-31.12.2020`)";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly docs: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "number";
                            };
                            readonly movieId: {
                                readonly type: "number";
                            };
                            readonly title: {
                                readonly type: "string";
                            };
                            readonly type: {
                                readonly type: "string";
                            };
                            readonly review: {
                                readonly type: "string";
                            };
                            readonly date: {
                                readonly type: "string";
                            };
                            readonly author: {
                                readonly type: "string";
                            };
                            readonly authorId: {
                                readonly type: "number";
                            };
                            readonly userRating: {
                                readonly type: "number";
                            };
                            readonly updatedAt: {
                                readonly format: "date-time";
                                readonly type: "string";
                            };
                            readonly createdAt: {
                                readonly format: "date-time";
                                readonly type: "string";
                            };
                        };
                        readonly required: readonly ["userRating", "updatedAt", "createdAt"];
                    };
                };
                readonly total: {
                    readonly type: "number";
                    readonly description: "Общее количество результатов";
                };
                readonly limit: {
                    readonly type: "number";
                    readonly description: "Количество результатов на странице";
                };
                readonly page: {
                    readonly type: "number";
                    readonly description: "Текущая страница";
                };
                readonly pages: {
                    readonly type: "number";
                    readonly description: "Сколько страниц всего";
                };
            };
            readonly required: readonly ["docs", "total", "limit", "page", "pages"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const SeasonControllerFindManyV14: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly page: {
                    readonly minimum: 1;
                    readonly default: 1;
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Номер страницы";
                };
                readonly limit: {
                    readonly minimum: 1;
                    readonly maximum: 250;
                    readonly default: 10;
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Количество элементов на странице";
                };
                readonly selectFields: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly enum: readonly ["movieId", "poster", "number", "name", "enName", "duration", "description", "enDescription", "episodesCount", "airDate", "episodes", "updatedAt", "createdAt"];
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Список полей требуемых в ответе из модели";
                };
                readonly notNullFields: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly enum: readonly ["movieId", "poster.url", "poster.previewUrl", "number", "name", "enName", "episodesCount", "airDate", "duration", "description", "enDescription", "episodes.number", "episodes.name", "episodes.enName", "episodes.airDate", "episodes.date", "episodes.description", "episodes.enDescription", "updatedAt", "createdAt"];
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Список полей которые не должны быть null или пусты";
                };
                readonly sortField: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly enum: readonly ["movieId", "poster.url", "poster.previewUrl", "number", "name", "enName", "episodesCount", "airDate", "duration", "description", "enDescription", "episodes.number", "episodes.name", "episodes.enName", "episodes.airDate", "episodes.date", "episodes.description", "episodes.enDescription", "updatedAt", "createdAt"];
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Сортировка по полям из модели";
                };
                readonly sortType: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Тип сортировки применительно к полям из sortField (пример: `\"1\", \"-1\"`)";
                };
                readonly movieId: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по ID фильма (пример: `\"666\", \"555\", \"!666\"`)";
                };
                readonly number: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по номеру сезона (пример: `\"1\", \"1-19\", \"!3\"`)";
                };
                readonly "episodes.number": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по нормеру эпизода (пример: `\"1\", \"1-19\", \"!3\"`)";
                };
                readonly airDate: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по дате выхода сезона (пример: `\"2020-01-01-2020-12-31\", \"2020-01-01\"`)";
                };
                readonly "episodes.airDate": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по дате выхода эпизода (пример: `\"2020-01-01-2020-12-31\", \"2020-01-01\"`)";
                };
                readonly updatedAt: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по дате обновления в базе (пример: `01.01.2020, 01.01.2020-31.12.2020`)";
                };
                readonly createdAt: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по дате добавления в базу (пример: `01.01.2020, 01.01.2020-31.12.2020`)";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly docs: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly movieId: {
                                readonly type: "number";
                            };
                            readonly number: {
                                readonly type: "number";
                            };
                            readonly episodesCount: {
                                readonly type: "number";
                            };
                            readonly episodes: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly number: {
                                            readonly type: "number";
                                        };
                                        readonly name: {
                                            readonly type: "string";
                                        };
                                        readonly enName: {
                                            readonly type: "string";
                                        };
                                        readonly date: {
                                            readonly type: "string";
                                            readonly deprecated: true;
                                        };
                                        readonly description: {
                                            readonly type: "string";
                                        };
                                        readonly still: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly url: {
                                                    readonly type: "string";
                                                    readonly description: "Чтобы найти фильмы с этим полем, используйте: `!null`";
                                                };
                                                readonly previewUrl: {
                                                    readonly type: "string";
                                                    readonly description: "Чтобы найти фильмы с этим полем, используйте: `!null`";
                                                };
                                            };
                                        };
                                        readonly airDate: {
                                            readonly type: "string";
                                        };
                                        readonly enDescription: {
                                            readonly type: "string";
                                        };
                                    };
                                };
                            };
                            readonly poster: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly url: {
                                        readonly type: "string";
                                        readonly description: "Чтобы найти фильмы с этим полем, используйте: `!null`";
                                    };
                                    readonly previewUrl: {
                                        readonly type: "string";
                                        readonly description: "Чтобы найти фильмы с этим полем, используйте: `!null`";
                                    };
                                };
                            };
                            readonly name: {
                                readonly type: "string";
                            };
                            readonly enName: {
                                readonly type: "string";
                            };
                            readonly duration: {
                                readonly type: "number";
                            };
                            readonly description: {
                                readonly type: "string";
                            };
                            readonly enDescription: {
                                readonly type: "string";
                            };
                            readonly airDate: {
                                readonly type: "string";
                            };
                            readonly updatedAt: {
                                readonly format: "date-time";
                                readonly type: "string";
                            };
                            readonly createdAt: {
                                readonly format: "date-time";
                                readonly type: "string";
                            };
                        };
                        readonly required: readonly ["updatedAt", "createdAt"];
                    };
                };
                readonly total: {
                    readonly type: "number";
                    readonly description: "Общее количество результатов";
                };
                readonly limit: {
                    readonly type: "number";
                    readonly description: "Количество результатов на странице";
                };
                readonly page: {
                    readonly type: "number";
                    readonly description: "Текущая страница";
                };
                readonly pages: {
                    readonly type: "number";
                    readonly description: "Сколько страниц всего";
                };
            };
            readonly required: readonly ["docs", "total", "limit", "page", "pages"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const StudioControllerFindManyV14: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly page: {
                    readonly minimum: 1;
                    readonly default: 1;
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Номер страницы";
                };
                readonly limit: {
                    readonly minimum: 1;
                    readonly maximum: 250;
                    readonly default: 10;
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Количество элементов на странице";
                };
                readonly selectFields: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly enum: readonly ["id", "subType", "title", "type", "movies", "updatedAt", "createdAt"];
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Список полей требуемых в ответе из модели";
                };
                readonly notNullFields: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly enum: readonly ["id", "subType", "title", "type", "movies.id", "updatedAt", "createdAt"];
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Список полей которые не должны быть null или пусты";
                };
                readonly sortField: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly enum: readonly ["id", "subType", "title", "type", "movies.id", "updatedAt", "createdAt"];
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Сортировка по полям из модели";
                };
                readonly sortType: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Тип сортировки применительно к полям из sortField (пример: `\"1\", \"-1\"`)";
                };
                readonly id: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по ID KinoPoisk (пример: `\"warnerbros\", \"222\", \"!666\"`)";
                };
                readonly "movies.id": {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по ID фильма (пример: `\"666\", \"555\", \"!666\"`)";
                };
                readonly type: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по типу студии (пример: `\"Производство\", \"Студия дубляжа\"`)";
                };
                readonly subType: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по типу студии (пример: `\"company\", \"studio\"`)";
                };
                readonly title: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по названию студии (пример: `\"Warner Bros.\", \"!Warner Bros.\"`)";
                };
                readonly updatedAt: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по дате обновления (пример: `01.01.2020, 01.01.2020-31.12.2020`)";
                };
                readonly createdAt: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Поиск по дате добавления (пример: `01.01.2020, 01.01.2020-31.12.2020`)";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly docs: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                            };
                            readonly subType: {
                                readonly type: "string";
                            };
                            readonly title: {
                                readonly type: "string";
                            };
                            readonly type: {
                                readonly enum: readonly ["Производство", "Спецэффекты", "Прокат", "Студия дубляжа"];
                                readonly type: "string";
                                readonly description: "`Производство` `Спецэффекты` `Прокат` `Студия дубляжа`";
                            };
                            readonly movies: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly id: {
                                        readonly type: "number";
                                    };
                                };
                            };
                            readonly updatedAt: {
                                readonly format: "date-time";
                                readonly type: "string";
                            };
                            readonly createdAt: {
                                readonly format: "date-time";
                                readonly type: "string";
                            };
                        };
                        readonly required: readonly ["id", "subType", "title", "updatedAt", "createdAt"];
                    };
                };
                readonly total: {
                    readonly type: "number";
                    readonly description: "Общее количество результатов";
                };
                readonly limit: {
                    readonly type: "number";
                    readonly description: "Количество результатов на странице";
                };
                readonly page: {
                    readonly type: "number";
                    readonly description: "Текущая страница";
                };
                readonly pages: {
                    readonly type: "number";
                    readonly description: "Сколько страниц всего";
                };
            };
            readonly required: readonly ["docs", "total", "limit", "page", "pages"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
export { ImageControllerFindManyV14, KeywordControllerFindManyV14, ListControllerFindManyV14, ListControllerFindOneV14, MovieControllerFindManyAwardsV14, MovieControllerFindManyByQueryV14, MovieControllerFindOneV14, MovieControllerGetPossibleValuesByFieldName, MovieControllerGetRandomMovieV14, MovieControllerSearchMovieV14, PersonControllerFindManyAwardsV14, PersonControllerFindManyV14, PersonControllerFindOneV14, PersonControllerSearchPersonV14, ReviewControllerFindManyV14, SeasonControllerFindManyV14, StudioControllerFindManyV14 };
