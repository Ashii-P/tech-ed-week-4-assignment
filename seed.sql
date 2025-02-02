CREATE TABLE IF NOT EXISTS cymruposts (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    place TEXT,
    postcode VARCHAR(10), 
    comment TEXT,
    photo TEXT
);

INSERT INTO cymruposts (place, postcode, comment, photo) VALUES
('Llanfyllin Town', 'SY22', 'Beautiful little town with friendly town folks! Has a cute little cafe/bar where you can play a variety of board games. The town is filled with cute little shops run by locals, and is surrounded by beautiful wildlife that is only a short drive away one of which is Lake Vyrnwy', 'https://s3.britishlistedbuildings.co.uk/lbimg/300/008/627/300008627-305869-800.jpg'),
('Lake Vyrnwy', 'SY10 0LY', 'Gorgeous lake with a rich history. Lovely to walk around and enjoy nature.', 'https://moore.photos/perch/resources/Adventure%20Images/advtheprincesstowerlakevyrnwy.jpg'),
('Llangorse Lake', 'LD3 7TR', 'Had a great bank holiday weekend and found the best site yet! Can’t recommend this site enough. Stunning views surrounded by the Brecon Beacons, overlooking the huge Llangorse lake. Great facilities such as wind sailing, water skiing, fishing, pedaloes. Lovely brand new toilet and washing facilities and the clubhouse is fantastic, with free bouncy castle, dog-friendly, live entertainment, BBQ, table tennis, pool, and air hockey.', 'https://c02.purpledshub.com/uploads/sites/47/2017/04/GettyImages-513186847-9a330d4.jpg'),
('Ystradfellte Waterfalls', 'CF44 9JF', 'An amazing walk with great waterfalls. Certainly a workout on the legs😂. It was a lovely Autumn day and took around three hours.', 'https://moore.photos/perch/resources/Adventure%20Images/advhuntingwaterfalls-2-w2000.jpg'),
('Cregennan Lakes', 'LL39 1LJ', 'The Cregennan lakes lie in the shadow of the mighty and beautiful mountain, Cadair Idris, to my mind the loveliest of south Snowdonia. The lakes glow in the winter or summer sun with vivid colors surrounding them, especially in autumn when the heather-bells haze the slopes with purple. There are lots of well-maintained footpaths, suitable for all abilities.', 'https://moore.photos/perch/resources/Adventure%20Images/advcregennenlakesfarmhouse.jpg'),
('Pistyll Rhaeadr Waterfall', 'SY10 0BZ', 'We cannot recommend this place enough! An absolutely breathtaking view of the waterfall from the bottom and even better from the top if you can ramble up through the mountains.', 'https://www.babsboardwellweddings.co.uk/wp-content/uploads/2022/08/Pistyll-Rhaeadr-Elopement-Wedding-Photography-14.jpg'),
('Llyn Idwal', 'LL57 3LZ', 'Amazing! It is really out of this world. So beautiful! Really recommend the walk around the lake. The walk is not difficult, so go for it.', 'https://moore.photos/perch/resources/Adventure%20Images/advlittlestreambigmountain-w2000.jpg'),
('Dinorwic Quarry', 'LL5 4TY', 'There is so much to see. Secret waterfalls, old slate buildings, and pulley wheels. Everyone heads to Mount Snowdon. Dinorwic Quarry may not be as high, but there is so much more to see and do.', 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/82/92/fb/caption.jpg?w=1200&h=-1&s=1'),
('Penarth Pier Pavilion', 'CF64 3AU', 'Really nice view from the pier. Nice walk and a few good restaurants and a little cinema. There’s a little shop just before you walk onto the pier bridge and it’s the best ice cream ever!!!', 'https://cdn.prod.website-files.com/602452bf511ad639c3e8aab6/60a61735e5b59e6e6fdfbbc6_VOG_6200.jpg');
