class MovieScreen
  attr_reader :capacity, :movie_title, :drive_in  

  def initialize(movie_title, capacity, drive_in)
    @movie_title = movie_title
    @capacity = capacity
    @drive_in = drive_in
  end
end
