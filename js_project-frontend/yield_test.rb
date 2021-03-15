class Array
  def my_map
    ary = []

    self.each do |elem|
      ary << yield(elem)
    end

    ary
  end
end

a = [1, 2, 3].my_map { |x| x + 1 }
puts a
